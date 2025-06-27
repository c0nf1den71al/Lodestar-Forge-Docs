<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/c0nf1den71al/Lodestar-Forge">
    <img src="https://raw.githubusercontent.com/c0nf1den71al/Lodestar-Forge/refs/heads/main/images/header.png" alt="Logo" width="400" height="166.6">
  </a>
  <br /><br />
  <p align="center">
    Red team infrastructure creation and management platform.
    <br /><br />
    <a href="https://docs.lodestar-forge.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://api.lodestar-forge.com/reference">API Reference</a>
    ·
    <a href="https://github.com/c0nf1den71al/Lodestar-Forge-Docs/issues">Report Bug</a>
    ·
    <a href="https://github.com/c0nf1den71al/Lodestar-Forge-Docs/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
![Lodestar Forge Screen Shot](https://github.com/c0nf1den71al/Lodestar-Forge/blob/main/images/overview.gif?raw=true)

> [!CAUTION]
> Lodestar Forge is still in early development. Some feautres of the platform may be unstable and therefore all infrastructure should be verified manually directly within your cloud provider console. We are not responsible for any unexpected billing which may occur due to bugs in the platform.

Introducing Lodestar Forge (or Forge), an infrastructure creation and management platform, specifically designed for red team engagements.

Red team operations often demand rapidly deployable, flexible, and covert infrastructure—yet existing tools are either too generalised, too manual, or not built with offensive operations in mind. Forge was created to fill this gap.

Forge is designed for operators - It abstracts away the complexity of managing infrastructure during engagements, so you can focus on what matters: executing your objectives. Whether you’re simulating APT-level threats, running internal red team campaigns, or building resilient test environments, Forge enables consistent and repeatable deployments at scale.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

✅ **Clean and simple UI** - Ensures speed and usablility, allowing you to focus on what matters during a red team engagement.

✅ **Cross-Cloud Compatibility** - Forge supports deployments across multiple cloud providers (currently AWS and DigitalOcean), offering flexibility and redundancy.

✅ **Scalability** - Design infrastructure to scale horizontally, accommodating varying sizes of engagements and adapting to changing operational requirements.

✅ **Modular Architecture** - Design infrastructure components (e.g., C2 servers, redirectors, phishing servers) as interchangeable templates, allowing for flexible and reusable configurations tailored to specific engagement needs.

✅ **Infrastructure as Code** - Leverage tools like Terraform and Ansible to define, deploy, and manage infrastructure consistently across various environments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section lists any major frameworks/libraries used to make this project happen:

* React Framework: [Next.js](https://nextjs.org)
* Component Library: [shadcn/ui](https://ui.shadcn.com)
* Database ORM: [DrizzleORM](https://orm.drizzle.team)
* Infrastructure as Code: [Terraform](https://developer.hashicorp.com/terraform)
* Configurations as Code: [Ansible](https://www.redhat.com/en/ansible-collaborative)
* General Docs: [Aria Docs](https://github.com/nisabmohd/Aria-Docs)
* API Docs: [Scalar](https://scalar.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Below is the getting started guide for Forge. Please refer to the documentation [here](https://docs.lodestar-forge.com/) or steps below for our quickstart guide.

### Prerequisites
The following prerequisites are required to get started with Forge:

* Docker
* Docker Compose

The following prerequisites are required to deploy infrastructure with Forge:

* An AWS or Digital Ocean account
* Tailscale


### Installation

1. To get started with Forge, first clone this GitHub repository.
```bash
git clone https://github.com/c0nf1den71al/Lodestar-Forge
```

2. Create a `.env` environment file and customise your Forge instance. Please refer to [example.env](https://github.com/c0nf1den71al/Lodestar-Forge/blob/main/example.env) for an example configuration.

3. Bring up Forge using Docker compose:
```
docker compose up
```

4. Access Forge in a web browser at `http://your.hostname.com:3000/`. You can authenticate with the default credentials, which will be displayed in the docker logs on first launch.

### Development Installation

1. Alternatively, to run Forge in development mode, clone this GitHub repository.
```bash
git clone https://github.com/c0nf1den71al/Lodestar-Forge
```

2. Create a `.env` environment file and customise your Forge instance. Please refer to [example.env](https://github.com/c0nf1den71al/Lodestar-Forge/blob/main/example.env) for an example configuration.

3. Bring up Forge using Docker Compose:
```
docker compose -f docker-compose.dev.yml up
```

4. Access Forge in a web browser at `http://your.hostname.com:3000/`. You can authenticate with the default credentials, which will be displayed in the docker logs on first launch

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] ~Digital Ocean Support~
- [x] ~Documentation~
- [x] ~Landing page~
- [ ] Deployment sharing/import/export
- [ ] Additional cloud providers
- [ ] Headscale support

See the [open issues](https://github.com/c0nf1den71al/Lodestar-Forge/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Email: contact@lodestar-forge.com

Project Link: [https://github.com/c0nf1den71al/Lodestar-Forge](https://github.com/c0nf1den71al/Lodestar-Forge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Below are some Acknowledgments / Shoutouts for some awesome people:

* [@sudonoodle](https://github.com/sudonoodle) - One of my closest friends and an awesome red teamer. Provided invaluable advice (and emotional support).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/davipess93.png" />

      <ProfileDetails>
        <header>
          <h1>Davi Pessoa</h1>

          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus
          voluptatem asperiores laborum voluptas animi officia consequatur
          natus!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            davipess93
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Servfaz
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            15 Seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}

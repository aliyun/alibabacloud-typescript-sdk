// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListBySensitiveFileRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page returned. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The image digest.
   * > Fuzzy match is supported.
   * 
   * @example
   * v005
   */
  imageDigest?: string;
  /**
   * @remarks
   * Specifies the language type for requests and responses. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the container image instance.
   * > You can call the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation of Container Registry to obtain the container image instance ID from the **InstanceId** response parameter.
   * 
   * @example
   * i-qewqrqcsadf****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * > Fuzzy match is supported.
   * 
   * @example
   * harbor-image-v001
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the image repository namespace.
   * > Fuzzy match is supported.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk level of the file. Separate multiple levels with commas (,). Valid values:
   * 
   * - **high**: high
   * - **medium**: medium
   * - **low**: low
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The scan scope collection. Valid values:
   * 
   * - **image**: image
   * - **container**: container
   */
  scanRange?: string[];
  /**
   * @remarks
   * The alerting type for sensitive files. Valid values:
   * 
   * - **npm_token**: NPM access token
   * - **ftp_cfg**: FTP configuration
   * - **google_oauth_key**: Google OAuth key
   * - **planetscale_passwd**: PlanetScale password
   * - **github_ssh_key**: GitHub SSH key
   * - **msbuild_publish_profile**: MSBuild publish profile
   * - **fastly_cdn_token**: Fastly CDN token
   * - **ssh_private_key**: SSH private key
   * - **aws_cli**: AWS CLI credential
   * - **cpanel_proftpd**: cPanel ProFTPd credential
   * - **postgresql_passwd**: PostgreSQL password file
   * - **discord_client_cred**: Discord client credential
   * - **rails_database**: Rails database configuration
   * - **aws_access_key**: AWS access key
   * - **esmtp_cfg**: ESMTP mail server configuration
   * - **docker_registry_cfg**: Docker image repository configuration
   * - **pem**: PEM
   * - **common_cred**: common credential
   * - **sftp_cfg**: SFTP connection configuration
   * - **grafana_token**: Grafana token
   * - **slack_token**: Slack token
   * - **ec_private_key**: EC private key
   * - **pypi_token**: PyPI upload token
   * - **finicity_token**: Finicity platform token
   * - **k8s_client_key**: Kubernetes client private key
   * - **git_cfg**: Git configuration
   * - **django_key**: Django key
   * - **jenkins_ssh**: Jenkins SSH configuration file
   * - **openssh_private_key**: OpenSSH private key
   * - **square_oauth**: Square OAuth credential
   * - **typeform_token**: Typeform token
   * - **common_database_cfg**: common database connection configuration
   * - **wordpress_database_cfg**: WordPress database configuration
   * - **googlecloud_api_key**: Google Cloud API key
   * - **vscode_sftp**: VSCode SFTP configuration
   * - **apache_htpasswd**: Apache htpasswd
   * - **planetscale_token**: PlanetScale token
   * - **contentful_preview_token**: Contentful preview token
   * - **php_database_cfg**: PHP application database password
   * - **atom_remote_sync**: Atom remote synchronization configuration
   * - **aws_session_token**: AWS session token
   * - **atom_sftp_cfg**: Atom SFTP configuration
   * - **asana_client_private_key**: Asana project management platform client key
   * - **tencentcloud_ak**: SecretId of other cloud providers
   * - **rsa_private_key**: RSA private key
   * - **github_personal_token**: GitHub personal access token
   * - **pgp**: PGP ciphertext file
   * - **stripe_skpk**: Stripe secret key
   * - **square_token**: Square access token
   * - **rails_carrierwave**: Rails Carrierwave file upload credential
   * - **dbeaver_database_cfg**: DBeaver database configuration
   * - **robomongo_cred**: Robomongo credential
   * - **github_oauth_token**: GitHub OAuth access token
   * - **pulumi_token**: Pulumi token
   * - **ventrilo_voip**: Ventrilo VoIP server configuration
   * - **macos_keychain**: macOS keychain
   * - **amazon_mws_token**: Amazon MWS token
   * - **dynatrace_token**: Dynatrace token
   * - **java_keystore**: Java keystore
   * - **microsoft_sdf**: Microsoft SQL CE database
   * - **kubernetes_dashboard_cred**: Kubernetes Dashboard user credential
   * - **atlassian_token**: Atlassian token
   * - **rdp**: Remote Desktop Protocol (RDP) connection
   * - **mailgun_key**: Mailgun webhook signing key
   * - **mailchimp_api_key**: Mailchimp API key
   * - **netrc_cfg**: .netrc configuration file
   * - **openvpn_cfg**: OpenVPN client configuration
   * - **github_refresh_token**: GitHub refresh token
   * - **salesforce**: Salesforce credential
   * - **sendinblue**: Sendinblue token
   * - **pkcs_private_key**: PKCS#12 key
   * - **rubyonrails_passwd**: Ruby on Rails password file
   * - **filezilla_ftp**: FileZilla FTP configuration
   * - **databricks_token**: Databricks token
   * - **gitLab_personal_token**: GitLab personal access token
   * - **rails_master_key**: Rails master key
   * - **sqlite**: SQLite3/SQLite database
   * - **firefox_logins**: Firefox logon configuration
   * - **mailgun_private_token**: Mailgun private token
   * - **joomla_cfg**: Joomla configuration
   * - **hashicorp_terraform_token**: HashiCorp Terraform token
   * - **jetbrains_ides**: JetBrains IDEs configuration
   * - **heroku_api_key**: Heroku API key
   * - **messagebird_token**: MessageBird token
   * - **github_app_token**: GitHub app token
   * - **hashicorp_vault_token**: HashiCorp Vault token
   * - **pgp_private_key**: PGP private key
   * - **sshpasswd**: SSH password
   * - **huaweicloud_ak**: Secret Access Key of other cloud providers
   * - **aws_s3cmd**: AWS S3cmd configuration
   * - **php_config**: PHP configuration
   * - **common_private_key**: common private key type
   * - **microsoft_mdf**: Microsoft SQL database
   * - **mediawiki_cfg**: MediaWiki configuration
   * - **jenkins_cred**: Jenkins credential
   * - **rubygems_cred**: RubyGems credential
   * - **clojars_token**: Clojars token
   * - **phoenix_web_passwd**: Phoenix web credential
   * - **puttygen_private_key**: PuTTYgen private key
   * - **google_oauth_token**: Google OAuth access token
   * - **rubyonrails_cfg**: Ruby on Rails database configuration
   * - **lob_api_key**: Lob API key
   * - **pkcs_cred**: PKCS#12 certificate
   * - **otr_private_key**: OTR private key
   * - **contentful_delivery_token**: Contentful delivery token
   * - **digital_ocean_tugboat**: DigitalOcean Tugboat configuration
   * - **dsa_private_key**: DSA private key
   * - **rails_app_token**: Rails app token
   * - **git_cred**: Git user credential
   * - **newrelic_api_key**: New Relic user API key
   * - **github_hub**: hub configuration that stores GitHub tokens
   * - **rubygem**: RubyGems token
   * 
   * @example
   * sshpasswd
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The status of the sensitive file. Valid values:
   * - **0**: unhandled
   * - **1**: ignored
   * - **2**: false positive
   * 
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageDigest: 'ImageDigest',
      lang: 'Lang',
      pageSize: 'PageSize',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskLevel: 'RiskLevel',
      scanRange: 'ScanRange',
      sensitiveFileKey: 'SensitiveFileKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageDigest: 'string',
      lang: 'string',
      pageSize: 'number',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevel: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      sensitiveFileKey: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


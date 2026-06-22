// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListBySensitiveFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to return. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The image digest.
   * > Fuzzy search is supported.
   * 
   * @example
   * v005
   */
  imageDigest?: string;
  /**
   * @remarks
   * Sets the language type for request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paginated query. Default value: 20.
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
   * > Fuzzy search is supported.
   * 
   * @example
   * harbor-image-v001
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * > Fuzzy search is supported.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk level of the file. Separate multiple levels with commas (,). Valid values:
   * 
   * - **high**: High risk.
   * - **medium**: Medium risk.
   * - **low**: Low risk.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The collection of scan scopes. Valid values:
   * 
   * - **image**: Image.
   * - **container**: Container.
   */
  scanRangeShrink?: string;
  /**
   * @remarks
   * The type of sensitive file alert. Valid values:
   * 
   * - **npm_token**: NPM access token
   * - **ftp_cfg**: FTP configuration
   * - **google_oauth_key**: Google OAuth Key
   * - **planetscale_passwd**: Planetscale password
   * - **github_ssh_key**: GitHub SSH key
   * - **msbuild_publish_profile**: MSBuild publish profile
   * - **fastly_cdn_token**: Fastly CDN token
   * - **ssh_private_key**: SSH private key
   * - **aws_cli**: AWS CLI credentials
   * - **cpanel_proftpd**: cPanel ProFTPd credentials
   * - **postgresql_passwd**: PostgreSQL password file
   * - **discord_client_cred**: Discord client credentials
   * - **rails_database**: Rails database configuration
   * - **aws_access_key**: AWS Access Key
   * - **esmtp_cfg**: ESMTP mail server configuration
   * - **docker_registry_cfg**: Docker image registry configuration
   * - **pem**: PEM
   * - **common_cred**: Common credentials
   * - **sftp_cfg**: SFTP connection configuration
   * - **grafana_token**: Grafana token
   * - **slack_token**: Slack Token
   * - **ec_private_key**: EC private key
   * - **pypi_token**: PyPI upload token
   * - **finicity_token**: Finicity platform token
   * - **k8s_client_key**: Kubernetes client private key
   * - **git_cfg**: Git configuration
   * - **django_key**: Django key
   * - **jenkins_ssh**: Jenkins SSH configuration file
   * - **openssh_private_key**: OpenSSH private key
   * - **square_oauth**: Square OAuth credentials
   * - **typeform_token**: Typeform token
   * - **common_database_cfg**: Common database connection configuration
   * - **wordpress_database_cfg**: WordPress database configuration
   * - **googlecloud_api_key**: Google Cloud API Key
   * - **vscode_sftp**: VSCode SFTP configuration
   * - **apache_htpasswd**: Apache htpasswd
   * - **planetscale_token**: Planetscale token
   * - **contentful_preview_token**: Contentful Preview token
   * - **php_database_cfg**: PHP application database password
   * - **atom_remote_sync**: Atom remote sync configuration
   * - **aws_session_token**: AWS session token
   * - **atom_sftp_cfg**: Atom SFTP configuration
   * - **asana_client_private_key**: Asana project management platform client key
   * - **tencentcloud_ak**: Third-party cloud SecretId
   * - **rsa_private_key**: RSA private key
   * - **github_personal_token**: GitHub Personal access token
   * - **pgp**: PGP encrypted file
   * - **stripe_skpk**: Stripe Secret Key
   * - **square_token**: Square access token
   * - **rails_carrierwave**: Rails Carrierwave file upload credentials
   * - **dbeaver_database_cfg**: DBeaver database configuration
   * - **robomongo_cred**: Robomongo credentials
   * - **github_oauth_token**: GitHub OAuth access token
   * - **pulumi_token**: Pulumi token
   * - **ventrilo_voip**: Ventrilo VoIP Server configuration
   * - **macos_keychain**: macOS Keychain
   * - **amazon_mws_token**: Amazon MWS Token
   * - **dynatrace_token**: Dynatrace token
   * - **java_keystore**: Java Keystore
   * - **microsoft_sdf**: Microsoft SQL CE database
   * - **kubernetes_dashboard_cred**: Kubernetes Dashboard user credentials
   * - **atlassian_token**: Atlassian token
   * - **rdp**: Remote Desktop Connection RDP
   * - **mailgun_key**: Mailgun Webhook Signing Key
   * - **mailchimp_api_key**: Mailchimp API Key
   * - **netrc_cfg**: .netrc configuration file
   * - **openvpn_cfg**: OpenVPN client configuration
   * - **github_refresh_token**: GitHub Refresh Token
   * - **salesforce**: Salesforce credentials
   * - **sendinblue**: Sendinblue token
   * - **pkcs_private_key**: PKCS#12 key
   * - **rubyonrails_passwd**: Ruby on Rails password file
   * - **filezilla_ftp**: FileZilla FTP configuration
   * - **databricks_token**: Databricks token
   * - **gitLab_personal_token**: GitLab Personal access token
   * - **rails_master_key**: Rails Master Key
   * - **sqlite**: SQLite3/SQLite database
   * - **firefox_logins**: Firefox login configuration
   * - **mailgun_private_token**: Mailgun Private token
   * - **joomla_cfg**: Joomla configuration
   * - **hashicorp_terraform_token**: HashiCorp Terraform Token
   * - **jetbrains_ides**: JetBrains IDEs configuration
   * - **heroku_api_key**: Heroku API key
   * - **messagebird_token**: MessageBird token
   * - **github_app_token**: GitHub App Token
   * - **hashicorp_vault_token**: HashiCorp Vault Token
   * - **pgp_private_key**: PGP private key
   * - **sshpasswd**: SSH password
   * - **huaweicloud_ak**: Third-party cloud Secret Access Key
   * - **aws_s3cmd**: AWS S3cmd configuration
   * - **php_config**: PHP configuration
   * - **common_private_key**: Common private key type
   * - **microsoft_mdf**: Microsoft SQL database
   * - **mediawiki_cfg**: MediaWiki configuration
   * - **jenkins_cred**: Jenkins credentials
   * - **rubygems_cred**: RubyGems credentials
   * - **clojars_token**: Clojars token
   * - **phoenix_web_passwd**: Phoenix Web credentials
   * - **puttygen_private_key**: PuTTYgen private key
   * - **google_oauth_token**: Google OAuth access token
   * - **rubyonrails_cfg**: Ruby on Rails database configuration
   * - **lob_api_key**: Lob API Key
   * - **pkcs_cred**: PKCS#12 certificate
   * - **otr_private_key**: OTR private key
   * - **contentful_delivery_token**: Contentful Delivery token
   * - **digital_ocean_tugboat**: Digital Ocean Tugboat configuration
   * - **dsa_private_key**: DSA private key
   * - **rails_app_token**: Rails App token
   * - **git_cred**: Git user credentials
   * - **newrelic_api_key**: New Relic User API Key
   * - **github_hub**: Hub configuration storing GitHub tokens
   * - **rubygem**: RubyGem token
   * 
   * @example
   * sshpasswd
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The status of the sensitive file. Valid values:
   * - **0**: Unhandled.
   * - **1**: Ignored.
   * - **2**: False positive.
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
      scanRangeShrink: 'ScanRange',
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
      scanRangeShrink: 'string',
      sensitiveFileKey: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


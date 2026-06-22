// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSensitiveFileListRequest extends $dara.Model {
  /**
   * @remarks
   * The value that corresponds to the search type.
   * 
   * @example
   * Rails Master Key
   */
  criteria?: string;
  /**
   * @remarks
   * The search type for sensitive files. Valid values:
   * 
   * - **SensitiveFileKey**: the sensitive file alerting categorization. Valid values:
   * 
   *     - **npm_token**: NPM access token
   *     - **ftp_cfg**: FTP configuration
   *     - **google_oauth_key**: Google OAuth Key
   *     - **planetscale_passwd**: Planetscale password
   *     - **github_ssh_key**: Github SSH key
   *     - **msbuild_publish_profile**: MSBuild publish profile
   *     - **fastly_cdn_token**: Fastly CDN token
   *     - **ssh_private_key**: SSH private key
   *     - **aws_cli**: AWS CLI credentials
   *     - **cpanel_proftpd**: cPanel ProFTPd credentials
   *     - **postgresql_passwd**: PostgreSQL password file
   *     - **discord_client_cred**: Discord client credentials
   *     - **rails_database**: Rails database configuration
   *     - **aws_access_key**: AWS Access Key
   *     - **esmtp_cfg**: ESMTP mail server configuration
   *     - **docker_registry_cfg**: Docker image repository configuration
   *     - **pem**: PEM
   *     - **common_cred**: common credentials
   *     - **sftp_cfg**: SFTP connection configuration
   *     - **grafana_token**: Grafana token
   *     - **slack_token**: Slack Token
   *     - **ec_private_key**: EC private key
   *     - **pypi_token**: PyPI upload token
   *     - **finicity_token**: Finicity platform token
   *     - **k8s_client_key**: Kubernetes client private key
   *     - **git_cfg**: Git configuration
   *     - **django_key**: Django key
   *     - **jenkins_ssh**: Jenkins SSH configuration file
   *     - **openssh_private_key**: OPENSSH private key
   *     - **square_oauth**: Square OAuth credentials
   *     - **typeform_token**: Typeform token
   *     - **common_database_cfg**: common database connection configuration
   *     - **wordpress_database_cfg**: WordPress database configuration
   *     - **googlecloud_api_key**: Google Cloud API Key
   *     - **vscode_sftp**: VSCode SFTP configuration
   *     - **apache_htpasswd**: Apache htpasswd
   *     - **planetscale_token**: Planetscale token
   *     - **contentful_preview_token**: Contentful Preview token
   *     - **php_database_cfg**: PHP application database password
   *     - **atom_remote_sync**: Atom remote synchronization configuration
   *     - **aws_session_token**: AWS session token
   *     - **atom_sftp_cfg**: Atom SFTP configuration
   *     - **asana_client_private_key**: Asana client private key
   *     - **tencentcloud_ak**: third-party cloud SecretId
   *     - **rsa_private_key**: RSA private key
   *     - **github_personal_token**: Github Personal access token
   *     - **pgp**: PGP encrypt file
   *     - **stripe_skpk**: Stripe Secret Key
   *     - **square_token**: Square access token
   *     - **rails_carrierwave**: Rails Carrierwave file upload credentials
   *     - **dbeaver_database_cfg**: DBeaver database configuration
   *     - **robomongo_cred**: Robomongo credentials
   *     - **github_oauth_token**: Github OAuth access token
   *     - **pulumi_token**: Pulumi token
   *     - **ventrilo_voip**: Ventrilo VoIP Server configuration
   *     - **macos_keychain**: macOS Keychain
   *     - **amazon_mws_token**: Amazon MWS Token
   *     - **dynatrace_token**: Dynatrace token
   *     - **java_keystore**: Java KeyStore
   *     - **microsoft_sdf**: Microsoft SQL CE database
   *     - **kubernetes_dashboard_cred**: Kubernetes Dashboard user credentials
   *     - **atlassian_token**: Atlassian token
   *     - **rdp**: Remote Desktop Protocol (RDP) connection
   *     - **mailgun_key**: Mailgun Webhook Signing Key
   *     - **mailchimp_api_key**: Mailchimp API Key
   *     - **netrc_cfg**: .netrc configuration file
   *     - **openvpn_cfg**: OpenVPN client configuration
   *     - **github_refresh_token**: Github Refresh Token
   *     - **salesforce**: Salesforce credentials
   *     - **sendinblue**: Sendinblue token
   *     - **pkcs_private_key**: PKCS#12 key
   *     - **rubyonrails_passwd**: Ruby on Rails password file
   *     - **filezilla_ftp**: FileZilla FTP configuration
   *     - **databricks_token**: Databricks token
   *     - **gitLab_personal_token**: GitLab Personal access token
   *     - **rails_master_key**: Rails Master Key
   *     - **sqlite**: SQLite3/SQLite database
   *     - **firefox_logins**: Firefox logon configuration
   *     - **mailgun_private_token**: Mailgun Private token
   *     - **joomla_cfg**: Joomla configuration
   *     - **hashicorp_terraform_token**: Hashicorp Terraform Token
   *     - **jetbrains_ides**: Jetbrains IDEs configuration
   *     - **heroku_api_key**: Heroku API key
   *     - **messagebird_token**: MessageBird token
   *     - **github_app_token**: Github App Token
   *     - **hashicorp_vault_token**: Hashicorp Vault Token
   *     - **pgp_private_key**: PGP private key
   *     - **sshpasswd**: SSH password
   *     - **huaweicloud_ak**: third-party cloud Secret Access Key
   *     - **aws_s3cmd**: AWS S3cmd configuration
   *     - **php_config**: PHP configuration
   *     - **common_private_key**: common private key types
   *     - **microsoft_mdf**: Microsoft SQL database
   *     - **mediawiki_cfg**: MediaWiki configuration
   *     - **jenkins_cred**: Jenkins credentials
   *     - **rubygems_cred**: Rubygems credentials
   *     - **clojars_token**: Clojars token
   *     - **phoenix_web_passwd**: Phoenix Web credentials
   *     - **puttygen_private_key**: PuTTYgen private key
   *     - **google_oauth_token**: Google OAuth access token
   *     - **rubyonrails_cfg**: Ruby On Rails database configuration
   *     - **lob_api_key**: Lob API Key
   *     - **pkcs_cred**: PKCS#12 certificate
   *     - **otr_private_key**: OTR private key
   *     - **contentful_delivery_token**: Contentful Delivery token
   *     - **digital_ocean_tugboat**: Digital Ocean Tugboat configuration
   *     - **dsa_private_key**: DSA private key
   *     - **rails_app_token**: Rails App token
   *     - **git_cred**: Git user credentials
   *     - **newrelic_api_key**: New Relic User API Key
   *     - **github_hub**: hub configuration that stores Github tokens
   *     - **rubygem**: Rubygem token
   * - **SensitiveFileName**: the sensitive file alerting type.
   * 
   * @example
   * SensitiveFileKey
   */
  criteriaType?: string;
  /**
   * @remarks
   * The page number of the page to return. Minimum value: **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the image.
   * > Call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation of Container Registry. You can obtain the unique identifier of the container image from the **ImageUuid** response parameter.
   * 
   * @example
   * 850613a48999900f48417c7e6e9d****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: high
   * 
   * - **medium**: medium
   * 
   * - **low**: low.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The collection of scan scopes. Valid values:
   * 
   * - **image**: image.
   * - **container**: container.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The list of sensitive file keys.
   */
  sensitiveKeyList?: string[];
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      scanRange: 'ScanRange',
      sensitiveKeyList: 'SensitiveKeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      imageUuid: 'string',
      lang: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      sensitiveKeyList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    if(Array.isArray(this.sensitiveKeyList)) {
      $dara.Model.validateArray(this.sensitiveKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


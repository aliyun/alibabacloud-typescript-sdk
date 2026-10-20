// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSensitiveFileByKeyResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The key of the last entry.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4NjE=
   */
  lastRowKey?: string;
  /**
   * @remarks
   * The maximum number of entries returned on each page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      lastRowKey: 'LastRowKey',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      lastRowKey: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSensitiveFileByKeyResponseBodySensitiveFileList extends $dara.Model {
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * Assess risks based on business conditions, remove risky content, and rebuild image
   */
  advice?: string;
  /**
   * @remarks
   * The description of the sensitive file.
   * 
   * @example
   * Verify the validity of the leaked AK.
   */
  description?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /usr/lib/abc.txt
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp of the first scan. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The timestamp of the latest scan. Unit: milliseconds.
   * 
   * @example
   * 1663691592000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The digest of the image layer.
   * 
   * @example
   * 0083a31cc0083a31ccf7c10367a6e783e8601e290f7c10367a6e783e860****
   */
  layerDigest?: string;
  /**
   * @remarks
   * The MD5 hash value of the sensitive file.
   * 
   * @example
   * b484b0dff093f358897486b58266****
   */
  md5?: string;
  /**
   * @remarks
   * The sensitive content.
   * 
   * @example
   * AKPIDteow289f9s************
   */
  promt?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **high**: high
   * - **medium**: medium
   * - **low**: low
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The alerting type of the sensitive file. Valid values:
   * 
   * - **npm_token**: NPM access token
   * - **ftp_cfg**: FTP configuration
   * - **google_oauth_key**: Google OAuth key
   * - **planetscale_passwd**: Planetscale password
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
   * - **planetscale_token**: Planetscale token
   * - **contentful_preview_token**: Contentful preview token
   * - **php_database_cfg**: PHP application database password
   * - **atom_remote_sync**: Atom remote synchronization configuration
   * - **aws_session_token**: AWS session token
   * - **atom_sftp_cfg**: Atom SFTP configuration
   * - **asana_client_private_key**: Asana project management platform client key
   * - **tencentcloud_ak**: SecretId of other cloud service providers
   * - **rsa_private_key**: RSA private key
   * - **github_personal_token**: GitHub personal access token
   * - **pgp**: PGP encrypted file
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
   * - **huaweicloud_ak**: Secret access key of other cloud service providers
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
   * - **github_hub**: Hub configuration that stores GitHub tokens
   * - **rubygem**: RubyGems token
   * 
   * @example
   * google_oauth_key
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The name of the alerting type of the sensitive file.
   * 
   * @example
   * Google OAuth Key
   */
  sensitiveFileName?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      description: 'Description',
      filePath: 'FilePath',
      firstScanTime: 'FirstScanTime',
      lastScanTime: 'LastScanTime',
      layerDigest: 'LayerDigest',
      md5: 'Md5',
      promt: 'Promt',
      riskLevel: 'RiskLevel',
      sensitiveFileKey: 'SensitiveFileKey',
      sensitiveFileName: 'SensitiveFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      description: 'string',
      filePath: 'string',
      firstScanTime: 'number',
      lastScanTime: 'number',
      layerDigest: 'string',
      md5: 'string',
      promt: 'string',
      riskLevel: 'string',
      sensitiveFileKey: 'string',
      sensitiveFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSensitiveFileByKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The detailed information about the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information of the returned result.
   */
  pageInfo?: DescribeImageSensitiveFileByKeyResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The list of sensitive files in the image.
   */
  sensitiveFileList?: DescribeImageSensitiveFileByKeyResponseBodySensitiveFileList[];
  /**
   * @remarks
   * The status of the returned result. Valid values:
   * - **true**: success
   * - **false**: failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      sensitiveFileList: 'SensitiveFileList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: DescribeImageSensitiveFileByKeyResponseBodyPageInfo,
      requestId: 'string',
      sensitiveFileList: { 'type': 'array', 'itemType': DescribeImageSensitiveFileByKeyResponseBodySensitiveFileList },
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.sensitiveFileList)) {
      $dara.Model.validateArray(this.sensitiveFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


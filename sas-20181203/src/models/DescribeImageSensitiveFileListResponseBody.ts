// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSensitiveFileListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
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
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2N******
   */
  lastRowKey?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 149
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

export class DescribeImageSensitiveFileListResponseBodySensitiveFileList extends $dara.Model {
  /**
   * @remarks
   * The hardening suggestion for the sensitive file check item.
   * 
   * @example
   * PEM (Privacy Enhanced Mail) format is a common format for digital certificates. PEM files can contain certificates, public keys, private keys, and other sensitive information. When a PEM file is either unencrypted or protected with a weak password, or if the password has been compromise, it poses a significantly higher security risk. This detection rule aims to identify such PEM files.
   */
  advice?: string;
  /**
   * @remarks
   * The classification key of the sensitive file.
   * 
   * @example
   * password
   */
  classKey?: string;
  /**
   * @remarks
   * The classification name of the sensitive file.
   * 
   * @example
   * password
   */
  className?: string;
  /**
   * @remarks
   * The number of times the sensitive file was detected by scans.
   * 
   * @example
   * 9
   */
  count?: number;
  /**
   * @remarks
   * The description of the sensitive file check item.
   * 
   * @example
   * Assess the risk based on business context and promptly remove any risky content.
   */
  description?: string;
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
   * The timestamp of the most recent scan. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  lastScanTime?: number;
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
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The sensitive file alerting type. Valid values:
   * 
   * - **npm_token**: NPM access token
   * - **ftp_cfg**: FTP configuration
   * - **google_oauth_key**: Google OAuth Key
   * - **planetscale_passwd**: Planetscale password
   * - **github_ssh_key**: Github SSH key
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
   * - **docker_registry_cfg**: Docker image repository configuration
   * - **pem**: PEM
   * - **common_cred**: common credentials
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
   * - **openssh_private_key**: OPENSSH private key
   * - **square_oauth**: Square OAuth credentials
   * - **typeform_token**: Typeform token
   * - **common_database_cfg**: common database connection configuration
   * - **wordpress_database_cfg**: WordPress database configuration
   * - **googlecloud_api_key**: Google Cloud API Key
   * - **vscode_sftp**: VSCode SFTP configuration
   * - **apache_htpasswd**: Apache htpasswd
   * - **planetscale_token**: Planetscale token
   * - **contentful_preview_token**: Contentful Preview token
   * - **php_database_cfg**: PHP application database password
   * - **atom_remote_sync**: Atom remote synchronization configuration
   * - **aws_session_token**: AWS session token
   * - **atom_sftp_cfg**: Atom SFTP configuration
   * - **asana_client_private_key**: Asana client private key
   * - **tencentcloud_ak**: third-party cloud SecretId
   * - **rsa_private_key**: RSA private key
   * - **github_personal_token**: Github Personal access token
   * - **pgp**: PGP encrypt file
   * - **stripe_skpk**: Stripe Secret Key
   * - **square_token**: Square access token
   * - **rails_carrierwave**: Rails Carrierwave file upload credentials
   * - **dbeaver_database_cfg**: DBeaver database configuration
   * - **robomongo_cred**: Robomongo credentials
   * - **github_oauth_token**: Github OAuth access token
   * - **pulumi_token**: Pulumi token
   * - **ventrilo_voip**: Ventrilo VoIP Server configuration
   * - **macos_keychain**: macOS Keychain
   * - **amazon_mws_token**: Amazon MWS Token
   * - **dynatrace_token**: Dynatrace token
   * - **java_keystore**: Java KeyStore
   * - **microsoft_sdf**: Microsoft SQL CE database
   * - **kubernetes_dashboard_cred**: Kubernetes Dashboard user credentials
   * - **atlassian_token**: Atlassian token
   * - **rdp**: Remote Desktop Protocol (RDP) connection
   * - **mailgun_key**: Mailgun Webhook Signing Key
   * - **mailchimp_api_key**: Mailchimp API Key
   * - **netrc_cfg**: .netrc configuration file
   * - **openvpn_cfg**: OpenVPN client configuration
   * - **github_refresh_token**: Github Refresh Token
   * - **salesforce**: Salesforce credentials
   * - **sendinblue**: Sendinblue token
   * - **pkcs_private_key**: PKCS#12 key
   * - **rubyonrails_passwd**: Ruby on Rails password file
   * - **filezilla_ftp**: FileZilla FTP configuration
   * - **databricks_token**: Databricks token
   * - **gitLab_personal_token**: GitLab Personal access token
   * - **rails_master_key**: Rails Master Key
   * - **sqlite**: SQLite3/SQLite database
   * - **firefox_logins**: Firefox logon configuration
   * - **mailgun_private_token**: Mailgun Private token
   * - **joomla_cfg**: Joomla configuration
   * - **hashicorp_terraform_token**: Hashicorp Terraform Token
   * - **jetbrains_ides**: Jetbrains IDEs configuration
   * - **heroku_api_key**: Heroku API key
   * - **messagebird_token**: MessageBird token
   * - **github_app_token**: Github App Token
   * - **hashicorp_vault_token**: Hashicorp Vault Token
   * - **pgp_private_key**: PGP private key
   * - **sshpasswd**: SSH password
   * - **huaweicloud_ak**: third-party cloud Secret Access Key
   * - **aws_s3cmd**: AWS S3cmd configuration
   * - **php_config**: PHP configuration
   * - **common_private_key**: common private key types
   * - **microsoft_mdf**: Microsoft SQL database
   * - **mediawiki_cfg**: MediaWiki configuration
   * - **jenkins_cred**: Jenkins credentials
   * - **rubygems_cred**: Rubygems credentials
   * - **clojars_token**: Clojars token
   * - **phoenix_web_passwd**: Phoenix Web credentials
   * - **puttygen_private_key**: PuTTYgen private key
   * - **google_oauth_token**: Google OAuth access token
   * - **rubyonrails_cfg**: Ruby On Rails database configuration
   * - **lob_api_key**: Lob API Key
   * - **pkcs_cred**: PKCS#12 certificate
   * - **otr_private_key**: OTR private key
   * - **contentful_delivery_token**: Contentful Delivery token
   * - **digital_ocean_tugboat**: Digital Ocean Tugboat configuration
   * - **dsa_private_key**: DSA private key
   * - **rails_app_token**: Rails App token
   * - **git_cred**: Git user credentials
   * - **newrelic_api_key**: New Relic User API Key
   * - **github_hub**: hub configuration that stores Github tokens
   * - **rubygem**: Rubygem token.
   * 
   * @example
   * google_oauth_key
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The name of the sensitive file alerting type.
   * 
   * @example
   * AccessKeyLeak
   */
  sensitiveFileName?: string;
  /**
   * @remarks
   * The status of the sensitive file check item. Valid values:
   * - **0**: Unprocessed.
   * - **1**: Processed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The number of unprocessed images.
   * 
   * @example
   * 2
   */
  unprocessedNum?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      classKey: 'ClassKey',
      className: 'ClassName',
      count: 'Count',
      description: 'Description',
      firstScanTime: 'FirstScanTime',
      lastScanTime: 'LastScanTime',
      riskLevel: 'RiskLevel',
      sensitiveFileKey: 'SensitiveFileKey',
      sensitiveFileName: 'SensitiveFileName',
      status: 'Status',
      unprocessedNum: 'UnprocessedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      classKey: 'string',
      className: 'string',
      count: 'number',
      description: 'string',
      firstScanTime: 'number',
      lastScanTime: 'number',
      riskLevel: 'string',
      sensitiveFileKey: 'string',
      sensitiveFileName: 'string',
      status: 'number',
      unprocessedNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSensitiveFileListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
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
   * The pagination information.
   */
  pageInfo?: DescribeImageSensitiveFileListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 8D19A089-E6BC-5244-800C-7E590D50487F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of sensitive files.
   */
  sensitiveFileList?: DescribeImageSensitiveFileListResponseBodySensitiveFileList[];
  /**
   * @remarks
   * Indicates whether the query was successful. Valid values:
   * - **true**: successful
   * - **false**: failed.
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
      pageInfo: DescribeImageSensitiveFileListResponseBodyPageInfo,
      requestId: 'string',
      sensitiveFileList: { 'type': 'array', 'itemType': DescribeImageSensitiveFileListResponseBodySensitiveFileList },
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


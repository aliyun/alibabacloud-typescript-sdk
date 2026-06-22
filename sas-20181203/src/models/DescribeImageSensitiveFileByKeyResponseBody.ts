// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSensitiveFileByKeyResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in the paging query.
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
   * The maximum number of entries per page in the paging query.
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
   * The timestamp of the most recent scan. Unit: milliseconds.
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
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * low
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
   * - **rubygem**: Rubygem token
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
   * The service status code. A value of 200 indicates that the request was successful.
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
   * The pagination information of the query result.
   */
  pageInfo?: DescribeImageSensitiveFileByKeyResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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
   * The status of the query result. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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


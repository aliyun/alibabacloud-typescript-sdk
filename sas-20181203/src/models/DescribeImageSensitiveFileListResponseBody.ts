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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The key of the last data entry.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAGYXFWIAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM1Mzc3Njc4MzA2ODY5NmI2YTY1Nzg2NTcxNjE2NDc4NjE=
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
   * The total number of entries returned.
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
   * The suggestion.
   * 
   * @example
   * Assess risks based on business conditions, remove risky content.
   */
  advice?: string;
  /**
   * @remarks
   * The key of the sensitive file type.
   * 
   * @example
   * password
   */
  classKey?: string;
  /**
   * @remarks
   * The name of the sensitive file type.
   * 
   * @example
   * password
   */
  className?: string;
  /**
   * @remarks
   * The number of scans that are performed on the sensitive file.
   * 
   * @example
   * 9
   */
  count?: number;
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
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The type of the alert for the sensitive file. Valid values:
   * 
   * *   **npm_token**: Node Package Manager (NPM) access token.
   * *   **ftp_cfg**: FTP configuration.
   * *   **google_oauth_key**: Google OAuth key.
   * *   **planetscale_passwd**: PlanetScale password.
   * *   **github_ssh_key**: GitHub SSH key.
   * *   **msbuild_publish_profile**: MSBuild publish profile.
   * *   **fastly_cdn_token**: Fastly CDN token.
   * *   **ssh_private_key**: SSH private key.
   * *   **aws_cli**: Amazon Web Services (AWS) CLI credential.
   * *   **cpanel_proftpd**: cPanel ProFTPD credential.
   * *   **postgresql_passwd**: PostgreSQL password file.
   * *   **discord_client_cred**: Discord client credential.
   * *   **rails_database**: Rails database configuration.
   * *   **aws_access_key**: AWS access key.
   * *   **esmtp_cfg**: Extended Simple Mail Transfer Protocol (ESMTP) configuration.
   * *   **docker_registry_cfg**: Docker image repository configuration.
   * *   **pem**: Privacy-Enhanced Mail (PEM).
   * *   **common_cred**: common credential.
   * *   **sftp_cfg**: Secure File Transfer Protocol (SFTP) connection configuration.
   * *   **grafana_token**: Grafana token.
   * *   **slack_token**: Slack token.
   * *   **ec_private_key**: EC private key.
   * *   **pypi_token**: upload token for the Python Package Index (PyPI).
   * *   **finicity_token**: Finicity token.
   * *   **k8s_client_key**: Kubernetes client private key.
   * *   **git_cfg**: Git configuration.
   * *   **django_key**: Django key.
   * *   **jenkins_ssh**: Jenkins SSH configuration file.
   * *   **openssh_private_key**: OpenSSH private key.
   * *   **square_oauth**: OAuth credential for Square.
   * *   **typeform_token**: Typeform token.
   * *   **common_database_cfg**: general database connection configuration.
   * *   **wordpress_database_cfg**: WordPress database configuration.
   * *   **googlecloud_api_key**: API key for Google Cloud.
   * *   **vscode_sftp**: VS Code SFTP configuration.
   * *   **apache_htpasswd**: Apache htpasswd.
   * *   **planetscale_token**: PlanetScale token.
   * *   **contentful_preview_token**: preview token for Contentful.
   * *   **php_database_cfg**: database password for a PHP application.
   * *   **atom_remote_sync**: Atom remote synchronization configuration.
   * *   **aws_session_token**: AWS session token.
   * *   **atom_sftp_cfg**: Atom SFTP configuration.
   * *   **asana_client_private_key**: Asana client key.
   * *   **tencentcloud_ak**: secret ID of a third-party cloud.
   * *   **rsa_private_key**: Rivest-Shamir-Adleman (RSA) private key.
   * *   **github_personal_token**: personal access token for GitHub.
   * *   **pgp**: Pretty Good Privacy (PGP) encrypted file.
   * *   **stripe_skpk**: Stripe secret key.
   * *   **square_token**: Square access token.
   * *   **rails_carrierwave**: file upload credential for Rails Carrierwave.
   * *   **dbeaver_database_cfg**: DBeaver database configuration.
   * *   **robomongo_cred**: Robomongo credential.
   * *   **github_oauth_token**: OAuth access token for GitHub.
   * *   **pulumi_token**: Pulumi token.
   * *   **ventrilo_voip**: Ventrilo VoIP server configuration.
   * *   **macos_keychain**: macOS keychain.
   * *   **amazon_mws_token**: Amazon MWS token.
   * *   **dynatrace_token**: Dynatrace token.
   * *   **java_keystore**: Java KeyStore (JKS).
   * *   **microsoft_sdf**: Microsoft SQL Server Compact Edition (CE) database.
   * *   **kubernetes_dashboard_cred**: user credential for Kubernetes Dashboard.
   * *   **atlassian_token**: Atlassian token.
   * *   **rdp**: remote desktop protocol (RDP).
   * *   **mailgun_key**: Mailgun webhook signing key.
   * *   **mailchimp_api_key**: API key for Mailchimp.
   * *   **netrc_cfg**: .netrc configuration file.
   * *   **openvpn_cfg**: OpenVPN client configuration.
   * *   **github_refresh_token**: GitHub refresh token.
   * *   **salesforce**: Salesforce credential.
   * *   **sendinblue**: Sendinblue token.
   * *   **pkcs_private_key**: PKCS#12 key.
   * *   **rubyonrails_passwd**: Ruby on Rails password file.
   * *   **filezilla_ftp**: FileZilla FTP configuration.
   * *   **databricks_token**: Databricks token.
   * *   **gitLab_personal_token**: personal access token for GitLab.
   * *   **rails_master_key**: Rails master key.
   * *   **sqlite**: SQLite3 or SQLite database.
   * *   **firefox_logins**: Firefox logon configuration.
   * *   **mailgun_private_token**: Mailgun private token.
   * *   **joomla_cfg**: Joomla configuration.
   * *   **hashicorp_terraform_token**: HashiCorp Terraform token.
   * *   **jetbrains_ides**: JetBrains IDEs configuration.
   * *   **heroku_api_key**: Heroku API key.
   * *   **messagebird_token**: MessageBird token.
   * *   **github_app_token**: GitHub app token.
   * *   **hashicorp_vault_token**: HashiCorp Vault token.
   * *   **pgp_private_key**: PGP private key.
   * *   **sshpasswd**: SSH password.
   * *   **huaweicloud_ak**: secret access key of a third-party cloud.
   * *   **aws_s3cmd**: AWS S3cmd configuration.
   * *   **php_config**: PHP configuration.
   * *   **common_private_key**: private key of a common type.
   * *   **microsoft_mdf**: Microsoft SQL Server database.
   * *   **mediawiki_cfg**: MediaWiki configuration.
   * *   **jenkins_cred**: Jenkins credential.
   * *   **rubygems_cred**: RubyGems credential.
   * *   **clojars_token**: Clojars token.
   * *   **phoenix_web_passwd**: Phoenix web credential.
   * *   **puttygen_private_key**: PuTTYgen private key.
   * *   **google_oauth_token**: Google OAuth access token.
   * *   **rubyonrails_cfg**: Ruby on Rails database configuration.
   * *   **lob_api_key**: Lob API key.
   * *   **pkcs_cred**: PKCS#12 certificate.
   * *   **otr_private_key**: Off-the-Record Messaging (OTR) private key.
   * *   **contentful_delivery_token**: delivery token for Contentful.
   * *   **digital_ocean_tugboat**: DigitalOcean Tugboat configuration.
   * *   **dsa_private_key**: Digital Signature Algorithm (DSA) private key.
   * *   **rails_app_token**: Rails app token.
   * *   **git_cred**: Git user credential.
   * *   **newrelic_api_key**: user API key for New Relic.
   * *   **github_hub**: hub configuration for storing GitHub tokens.
   * *   **rubygem**: RubyGems token.
   * 
   * @example
   * google_oauth_key
   */
  sensitiveFileKey?: string;
  /**
   * @remarks
   * The name of the alert type for the sensitive file.
   * 
   * @example
   * AccessKeyLeak
   */
  sensitiveFileName?: string;
  /**
   * @remarks
   * The status of the sensitive file. Valid values:
   * 
   * *   **0**: unhandled.
   * *   **1**: handled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The number of unprocessed mirrors.
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
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
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
   * The error message returned.
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8D19A089-E6BC-5244-800C-7E590D50487F
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about the sensitive files.
   */
  sensitiveFileList?: DescribeImageSensitiveFileListResponseBodySensitiveFileList[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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


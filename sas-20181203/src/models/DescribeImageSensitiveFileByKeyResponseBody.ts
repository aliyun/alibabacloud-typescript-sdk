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
   * The number of entries returned per page.
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
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663321552000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The timestamp when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1663691592000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 0083a31cc0083a31ccf7c10367a6e783e8601e290f7c10367a6e783e860****
   */
  layerDigest?: string;
  /**
   * @remarks
   * The MD5 value of the sensitive file.
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
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The type of the alert for the sensitive file. Valid values:
   * 
   * *   **npm_token**: NPM access token
   * *   **ftp_cfg**: FTP configuration
   * *   **google_oauth_key**: Google OAuth key
   * *   **planetscale_passwd**: PlanetScale password
   * *   **github_ssh_key**: Github SSH key
   * *   **msbuild_publish_profile**: MSBuild publish profile
   * *   **fastly_cdn_token**: Fastly CDN token
   * *   **ssh_private_key**: SSH private key
   * *   **aws_cli**: Amazon Web Services (AWS) CLI credential
   * *   **cpanel_proftpd**: cPanel ProFTPD credential
   * *   **postgresql_passwd**: PostgreSQL password file
   * *   **discord_client_cred**: Discord client credential
   * *   **rails_database**: Rails database configuration
   * *   **aws_access_key**: AWS Access Key
   * *   **esmtp_cfg**: Extended Simple Mail Transfer Protocol (ESMTP) configuration
   * *   **docker_registry_cfg**: configuration of a Docker image repository
   * *   **pem**: Privacy-Enhanced Mail (PEM)
   * *   **common_cred**: common credential
   * *   **sftp_cfg**: configuration of connection over Secure File Transfer Protocol (SFTP)
   * *   **grafana_token**: Grafana token
   * *   **slack_token**: Slack token
   * *   **ec_private_key**: Elliptic Curve (EC) private key
   * *   **pypi_token**: Python Package Index (PyPI) token
   * *   **finicity_token**: Finicity token
   * *   **k8s_client_key**: private key for the Kubernetes client
   * *   **git_cfg**: Git configuration
   * *   **django_key**: Django key
   * *   **jenkins_ssh**: SSH configuration file for Jenkins
   * *   **openssh_private_key**: OpenSSH private key
   * *   **square_oauth**: Square OAuth credential
   * *   **typeform_token**: Typeform token
   * *   **common_database_cfg**: configuration of general database connection
   * *   **wordpress_database_cfg**: WordPress database configuration
   * *   **googlecloud_api_key**: API key for Google Cloud
   * *   **vscode_sftp**: VSCode SFTP configuration
   * *   **apache_htpasswd**: Apache htpasswd
   * *   **planetscale_token**: PlanetScale token
   * *   **contentful_preview_token**: preview token for Contentful
   * *   **php_database_cfg**: database password for a PHP application
   * *   **atom_remote_sync**: Atom remote synchronization configuration
   * *   **aws_session_token**: AWS session token
   * *   **atom_sftp_cfg**: Atom SFTP configuration
   * *   **asana_client_private_key**: Asana client key
   * *   **tencentcloud_ak**: secret ID of a third-party cloud
   * *   **rsa_private_key**: Rivest-Shamir-Adleman (RSA) private key
   * *   **github_personal_token**: personal access token for GitHub
   * *   **pgp**: Pretty Good Privacy (PGP) encrypted file
   * *   **stripe_skpk**: Stripe secret key
   * *   **square_token**: Square access token
   * *   **rails_carrierwave**: Rails Carrierwave credential
   * *   **dbeaver_database_cfg**: DBeaver database configuration
   * *   **robomongo_cred**: RoboMongo credential
   * *   **github_oauth_token**: OAuth access token for GitHub
   * *   **pulumi_token**: Pulumi token
   * *   **ventrilo_voip**: configuration of a Ventrilo VoIP server
   * *   **macos_keychain**: macOS Keychain
   * *   **amazon_mws_token**: Amazon MWS token
   * *   **dynatrace_token**: Dynatrace token
   * *   **java_keystore**: Java KeyStore (JKS)
   * *   **microsoft_sdf**: Microsoft SQL Server Compact Edition (CE) database
   * *   **kubernetes_dashboard_cred**: user credential for Kubernetes Dashboard
   * *   **atlassian_token**: Atlassian token
   * *   **rdp**: remote desktop protocol (RDP)
   * *   **mailgun_key**: Mailgun webhook signing key
   * *   **mailchimp_api_key**: API key for Mailchimp
   * *   **netrc_cfg**: netrc configuration file
   * *   **openvpn_cfg**: configuration of the OpenVPN client
   * *   **github_refresh_token**: GitHub refresh token
   * *   **salesforce**: Salesforce credential
   * *   **salesforce**: Sendinblue token
   * *   **pkcs_private_key**: PKCS#12 private key
   * *   **rubyonrails_passwd**: Ruby on Rails password file
   * *   **filezilla_ftp**: FileZilla FTP configuration
   * *   **databricks_token**: Databricks token
   * *   **gitLab_personal_toke**: personal access token for GitLab
   * *   **rails_master_key**: Rails master key
   * *   **sqlite**: SQLite3 or SQLite database
   * *   **firefox_logins**: Firefox logon configuration
   * *   **mailgun_private_token**: Mailgun private token
   * *   **joomla_cfg**: Joomla configuration
   * *   **hashicorp_terraform_token**: HashiCorp Terraform token
   * *   **jetbrains_ides**: JetBrains IDEs configuration
   * *   **heroku_api_key**: API key for Heroku
   * *   **messagebird_token**: MessageBird token
   * *   **github_app_token**: Github app token
   * *   **hashicorp_vault_token**: HashiCorp Vault token
   * *   **pgp_private_key**: PGP private key
   * *   **sshpasswd**: SSH password
   * *   **huaweicloud_ak**: secret access key of a third-party cloud
   * *   **aws_s3cmd**: AWS S3cmd configuration
   * *   **php_config**: PHP configuration
   * *   **common_private_key**: common private key
   * *   **microsoft_mdf**: Microsoft SQL Server database
   * *   **mediawiki_cfg**: MediaWiki configuration
   * *   **jenkins_cred**: Jenkins credential
   * *   **rubygems_cred**: RubyGems credential
   * *   **clojars_token**: Clojars token
   * *   **phoenix_web_passwd**: Phoenix web credential
   * *   **puttygen_private_key**: PuTTYgen private key
   * *   **google_oauth_token**: Google OAuth access token
   * *   **rubyonrails_cfg**: Ruby On Rails database configuration
   * *   **lob_api_key**: Lob API key for Lob
   * *   **pkcs_cred**: PKCS#12 certificate
   * *   **otr_private_key**: Off-the-Record Messaging (OTR) private key
   * *   **contentful_delivery_token**: Contentful delivery token
   * *   **digital_ocean_tugboat**: DigitalOcean Tugboat configuration
   * *   **dsa_private_key**: Digital Signature Algorithm (DSA) private key
   * *   **rails_app_token**: app token for Rails
   * *   **git_cred**: Git user credential
   * *   **newrelic_api_key**: User API key for New Relic
   * *   **github_hub**: hub configuration for storing GitHub tokens
   * *   **rubygem**: Rubygem Token
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
   * The status code returned. If the 200 status code is returned, the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
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
  pageInfo?: DescribeImageSensitiveFileByKeyResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sensitive files.
   */
  sensitiveFileList?: DescribeImageSensitiveFileByKeyResponseBodySensitiveFileList[];
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


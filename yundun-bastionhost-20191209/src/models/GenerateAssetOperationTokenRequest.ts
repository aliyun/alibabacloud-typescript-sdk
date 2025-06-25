// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAssetOperationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account whose assets the O\\&M token takes effect.
   * 
   * >  You must specify at least one of the following parameters: AssetAccountId and AssetAccountName. If you specify both parameters, AssetAccountId takes precedence.
   * 
   * @example
   * 2
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The name of the host account. If you use a custom account, enter a real account name.
   * 
   * >  When both AssetAccountId and AssetAccountName are specified, AssetAccountId takes precedence.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The Base64-encoded password. This parameter is required if you want to apply for an O\\&M token for a custom account.
   * 
   * @example
   * dGVzdHBhc3N3b3Jk
   */
  assetAccountPassword?: string;
  /**
   * @remarks
   * The name of the protocol. Valid values:
   * 
   * *   SSH
   * *   RDP
   * *   Oracle
   * *   PostgreSQL
   * *   MySQL
   * *   SQLServer
   * 
   * @example
   * SSH
   */
  assetAccountProtocolName?: string;
  /**
   * @remarks
   * The ID of the asset for which you want to apply for an O\\&M token.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  assetId?: string;
  /**
   * @remarks
   * The type of the asset for which you want to apply for an O\\&M token. Valid values:
   * 
   * *   **Host**
   * *   **Database**
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  assetType?: string;
  /**
   * @remarks
   * The name of the database. If you set OperationMode to Sso and AssetAccountProtocolName to PostgreSQL or Oracle and you select Custom Account for the Database Account parameter, you must specify this parameter.
   * 
   * >This parameter is available only for bastion hosts that run V3.2.44 or later.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The ID of the bastion host for which you want to apply an O\\&M token.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon attribute. If you set OperationMode to Sso and AssetAccountProtocolName to Oracle, you must specify this parameter. Valid values:
   * 
   * *   **SERVICENAME**
   * *   **SID**
   * 
   * >  This parameter is available only for Bastionhost V3.2.44 and later.
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The O\\&M logon method. Valid values:
   * 
   * *   **WebToken**: O\\&M token-based logon.
   * *   **Sso**: local client-based logon.
   * 
   * >  This parameter is available only for Bastionhost V3.2.44 and later. If you do not specify this parameter, the default value WebToken is used.
   * 
   * @example
   * Sso
   */
  operationMode?: string;
  /**
   * @remarks
   * The logon remarks. This parameter is required if an administrator enables the feature of logon remarks on the Control Policies page.
   * 
   * @example
   * comment
   */
  operationNote?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the local client that you want to perform O\\&M operations on Linux assets. If you set OperationMode to Sso and AssetAccountProtocolName to SSH, you must specify this parameter. Valid values:
   * 
   * *   **ssh**: Perform O\\&M operations on Linux assets by connecting to a bastion host from an SSH client.
   * *   **sftp**: Perform O\\&M operations on Linux assets by connecting to a bastion host from a Secure File Transfer Protocol (SFTP) client.
   * 
   * >  This parameter is available only for Bastionhost V3.2.44 and later.
   * 
   * @example
   * ssh
   */
  ssoClient?: string;
  static names(): { [key: string]: string } {
    return {
      assetAccountId: 'AssetAccountId',
      assetAccountName: 'AssetAccountName',
      assetAccountPassword: 'AssetAccountPassword',
      assetAccountProtocolName: 'AssetAccountProtocolName',
      assetId: 'AssetId',
      assetType: 'AssetType',
      databaseSchema: 'DatabaseSchema',
      instanceId: 'InstanceId',
      loginAttribute: 'LoginAttribute',
      operationMode: 'OperationMode',
      operationNote: 'OperationNote',
      regionId: 'RegionId',
      ssoClient: 'SsoClient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAccountId: 'string',
      assetAccountName: 'string',
      assetAccountPassword: 'string',
      assetAccountProtocolName: 'string',
      assetId: 'string',
      assetType: 'string',
      databaseSchema: 'string',
      instanceId: 'string',
      loginAttribute: 'string',
      operationMode: 'string',
      operationNote: 'string',
      regionId: 'string',
      ssoClient: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


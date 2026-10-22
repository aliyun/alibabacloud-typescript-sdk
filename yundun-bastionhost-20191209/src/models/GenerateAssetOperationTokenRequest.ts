// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAssetOperationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset account for which you want to apply for an O&M token.
   * > You must specify at least one of AssetAccountId and AssetAccountName. If both are specified, AssetAccountId takes precedence.
   * 
   * @example
   * 2
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The name of the host account. If the account is a custom account, specify the actual account name.
   * 
   * > If both AssetAccountId and AssetAccountName are specified, AssetAccountId takes precedence.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The Base64-encoded password. This parameter is required when you apply for an O&M token for a custom account.
   * 
   * @example
   * dGVzdHBhc3N3b3Jk
   */
  assetAccountPassword?: string;
  /**
   * @remarks
   * The name of the protocol. Valid values:
   * 
   * - **SSH**
   * - **RDP**
   * - **Oracle**
   * - **PostgreSQL**
   * - **MySQL**
   * - **SQLServer**
   * 
   * > This parameter is required when you apply for an O&M token for a custom account.
   * 
   * @example
   * SSH
   */
  assetAccountProtocolName?: string;
  /**
   * @remarks
   * The ID of the asset for which you want to apply for an O&M token.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  assetId?: string;
  /**
   * @remarks
   * The Asset Type for which you want to apply for a token. Valid values:
   * - **Host**: host
   * - **Database**: database
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  assetType?: string;
  /**
   * @remarks
   * The name of the database. This parameter is required when OperationMode is set to Sso, AssetAccountProtocolName is set to PostgreSQL or Oracle, and the account is a custom account.
   * > This parameter is supported only in Bastionhost V3.2.44 and later.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance for which you want to apply for an O&M token.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon attribute. This parameter is required when OperationMode is set to Sso and the account is a custom Oracle account. Valid values:
   * - **SERVICENAME**
   * - **SID**
   * > This parameter is supported only in Bastionhost V3.2.44 and later.
   * 
   * @example
   * SID
   * 
   * **if can be null:**
   * true
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The O&M logon method. Valid values:
   * - **WebToken**: obtain an O&M token
   * - **Sso**: log on by using a local client
   * > This parameter is supported only in Bastionhost V3.2.44 and later. If this parameter is left empty, the default value WebToken is used.
   * 
   * @example
   * Sso
   */
  operationMode?: string;
  /**
   * @remarks
   * The logon note. This parameter is required when the administrator enables the logon note feature in the control policy.
   * 
   * @example
   * comment
   */
  operationNote?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the local client to be opened for O&M operations on Linux assets. This parameter is required when OperationMode is set to Sso and the asset protocol is SSH. Valid values:
   * - **ssh**: open an SSH client to perform O&M operations with SSH permissions
   * - **sftp**: open an SFTP client to perform O&M operations with SFTP permissions
   * > This parameter is supported only in Bastionhost V3.2.44 and later.
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


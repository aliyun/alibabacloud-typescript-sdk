// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAssetOperationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset account.
   * 
   * > You must specify at least one of `AssetAccountId` and `AssetAccountName`. If you specify both parameters, `AssetAccountId` is used.
   * 
   * @example
   * 2
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The name of the asset account. If this parameter specifies a custom account, you must enter the actual account name.
   * 
   * > If you specify both `AssetAccountId` and `AssetAccountName`, `AssetAccountId` is used.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The password that is encoded in Base64. This parameter is required if you want to generate an O\\&M token for a custom account.
   * 
   * @example
   * dGVzdHBhc3N3b3Jk
   */
  assetAccountPassword?: string;
  /**
   * @remarks
   * The protocol that is used to connect to the asset. Valid values:
   * 
   * - **SSH**
   * 
   * - **RDP**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **MySQL**
   * 
   * - **SQLServer**
   * 
   * > This parameter is required if you want to generate an O\\&M token for a custom account.
   * 
   * @example
   * SSH
   */
  assetAccountProtocolName?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  assetId?: string;
  /**
   * @remarks
   * The type of the asset for which you want to generate an O\\&M token. Valid values:
   * 
   * - **Host**
   * 
   * - **Database**
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  assetType?: string;
  /**
   * @remarks
   * The name of the database. This parameter is required for a custom account if you set OperationMode to Sso and AssetAccountProtocolName to PostgreSQL or Oracle.
   * 
   * > This parameter is supported only by bastion hosts of V3.2.44 or later.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon attribute. This parameter is required if you set OperationMode to Sso and use a custom Oracle account. Valid values:
   * 
   * - **SERVICENAME**
   * 
   * - **SID**
   * 
   * > This parameter is supported only by bastion hosts of V3.2.44 or later.
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
   * The O\\&M mode. Valid values:
   * 
   * - **WebToken**: generates an O\\&M token.
   * 
   * - **Sso**: logs on to the client.
   * 
   * > This parameter is supported only by bastion hosts of V3.2.44 or later. If you do not specify this parameter, WebToken is used.
   * 
   * @example
   * Sso
   */
  operationMode?: string;
  /**
   * @remarks
   * The remarks for the logon. This parameter is required if your administrator enables logon remarks in the control policy.
   * 
   * @example
   * comment
   */
  operationNote?: string;
  /**
   * @remarks
   * The region ID of the bastion host instance.
   * 
   * > For more information about region IDs, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the client that you want to use for O\\&M on a Linux asset. This parameter is required if you set OperationMode to Sso and the asset protocol to SSH. Valid values:
   * 
   * - **ssh**: opens a client that supports the SSH protocol to perform O\\&M with SSH permissions.
   * 
   * - **sftp**: opens a client that supports the SFTP protocol to perform O\\&M with SFTP permissions.
   * 
   * > This parameter is supported only by bastion hosts of V3.2.44 or later.
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


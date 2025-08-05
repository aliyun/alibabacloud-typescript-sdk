// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the HBR client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The installation information of the HBR clients.
   * 
   * @example
   * [  {    "instanceId": "i-bp116lr******te9q2",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q******9rfz9",    "sourceTypes": [      "HANA"    ]  },  {    "instanceId": "i-bp116lrux******hte9q4",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q5094vw9rfz9",    "sourceTypes": [      "HANA"    ]  }]
   */
  clientInfo?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * - **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvx7d3c4kpny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to transmit data over HTTPS. Valid values:
   * 
   * *   true: transmits data over HTTPS.
   * *   false: transmits data over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0001ufe******kgm
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientInfo: 'ClientInfo',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientInfo: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-000ed600******6b0
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the Cloud Backup client. Valid value: **ECS_AGENT**, which indicates an SAP HANA backup client.
   * 
   * @example
   * ECS_AGENT
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0005ni1******2l87
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bxl7o5qyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the data source. Valid value:**HANA**, which indicates SAP HANA backup.
   * 
   * @example
   * HANA
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0001vk0z******xdyr
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceType: 'string',
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


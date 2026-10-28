// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShieldPrecheckRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the data migration or data synchronization instance. You can call the **DescribeMigrationJobs** or DescribeSynchronizationJobs operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsi76118o3w92****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The precheck items. Separate multiple precheck items with commas (,). Valid values:
   * - **CHECK_SAME_OBJ**: Checks whether objects with the same name exist.
   * - **CHECK_SAME_USER**: Checks whether accounts with different names exist.
   * - **CHECK_SRC**: Checks the version of the source database.
   * - **CHECK_TOPOLOGY**: Checks the topology version.
   * > For more information about the topology versions supported by DTS, see [Topology overview](https://help.aliyun.com/document_detail/124115.html).
   * - **CHECK_SERVER_ID**: Checks the server_id of the source database.
   * 
   * This parameter is required.
   * 
   * @example
   * CHECK_SAME_OBJ
   */
  precheckItems?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      precheckItems: 'PrecheckItems',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      precheckItems: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


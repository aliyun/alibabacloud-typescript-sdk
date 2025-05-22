// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipPreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * c7412z57g8k****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The precheck task ID. You can call the **DescribePreCheckStatus** operation to query the task ID.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to skip the precheck item. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skip?: boolean;
  /**
   * @remarks
   * The shortened name of the precheck item. Valid values:
   * 
   * *   **["CHECK_SAME_OBJ"]**: object name conflict.
   * *   **["CHECK_SAME_USER"]**: username conflict.
   * *   **["CHECK_SRC"]**: source database version.
   * *   **["CHECK_TOPOLOGY"]**: topology. For more information about the topologies supported by Data Transmission Service (DTS), see [Synchronization topologies](https://help.aliyun.com/document_detail/124115.html).
   * *   **["CHECK_SERVER_ID"]**: the server ID of the source database.
   * *   **["CHECK_DEST_TABLE_EMPTY"]**: existence of objects in the destination database.
   * 
   * > Separate multiple item names with commas (,). Example: **["CHECK_SRC","CHECK_SAME_OBJ"]**.
   * 
   * @example
   * ["CHECK_SAME_OBJ"]
   */
  skipPreCheckItems?: string;
  /**
   * @remarks
   * The precheck item name. This parameter corresponds to **SkipPreCheckItems**. Valid values:
   * 
   * *   **["CHECK_SAME_OBJ_DETAIL"]**: object name conflict.
   * *   **["CHECK_SAME_USER_DETAIL"]**: username conflict.
   * *   **["CHECK_SRC_DETAIL"]**: source database version.
   * *   **["CHECK_TOPOLOGY_DETAIL"]**: topology. For more information about the topologies supported by DTS, see [Synchronization topologies](https://help.aliyun.com/document_detail/124115.html).
   * *   **["CHECK_SERVER_ID_DETAIL"]**: the server ID of the source database.
   * *   **["CHECK_DEST_TABLE_EMPTY_DETAIL"]**: empty tables in the destination database.
   * 
   * > Separate multiple item names with commas (,). Example: **["CHECK_SRC_DETAIL","CHECK_SAME_OBJ_DETAIL"]**.
   * 
   * @example
   * ["CHECK_SAME_OBJ_DETAIL"]
   */
  skipPreCheckNames?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobId: 'JobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      skipPreCheckItems: 'SkipPreCheckItems',
      skipPreCheckNames: 'SkipPreCheckNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      skip: 'boolean',
      skipPreCheckItems: 'string',
      skipPreCheckNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


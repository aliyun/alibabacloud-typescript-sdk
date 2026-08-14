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
   * The ID of the precheck task. You can call **DescribePreCheckStatus** to query the ID.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Specifies whether to suppress the precheck item. Valid values:
   * 
   * - **true**: Suppress the precheck item.
   * - **false**: Unsuppress the precheck item.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skip?: boolean;
  /**
   * @remarks
   * The abbreviated names of the precheck items to suppress or unsuppress. Valid values:
   * 
   * - **["CHECK_SAME_OBJ"]**: check for objects with the same name.
   * - **["CHECK_SAME_USER"]**: check for accounts with different names.
   * - **["CHECK_SRC"]**: source database version check.
   * - **["CHECK_TOPOLOGY"]**: topology version check. For the topology versions supported by DTS, see [Topology overview](https://help.aliyun.com/document_detail/124115.html).
   * - **["CHECK_SERVER_ID"]**: source database server_id check.
   * - **["CHECK_DEST_TABLE_EMPTY"]**: destination database object existence check.
   * - **["CHECK_SUPER_AUTH_DEST"]**: destination database super account permission check.
   * 
   * > Separate multiple item names with commas (,), for example, **["CHECK_SRC","CHECK_SAME_OBJ"]**.
   * 
   * @example
   * ["CHECK_SAME_OBJ"]
   */
  skipPreCheckItems?: string;
  /**
   * @remarks
   * The full names of the precheck items to suppress or unsuppress. This parameter corresponds to the **SkipPreCheckItems** parameter. Valid values:
   * 
   * - **["CHECK_SAME_OBJ_DETAIL"]**: check for objects with the same name.
   * - **["CHECK_SAME_USER_DETAIL"]**: check for accounts with different names.
   * - **["CHECK_SRC_DETAIL"]**: source database version check.
   * - **["CHECK_TOPOLOGY_DETAIL"]**: topology version check. For the topology versions supported by DTS, see [Topology overview](https://help.aliyun.com/document_detail/124115.html).
   * - **["CHECK_SERVER_ID_DETAIL"]**: source database server_id check.
   * - **["CHECK_DEST_TABLE_EMPTY_DETAIL"]**: check whether the destination database tables are empty.
   * - **["CHECK_SUPER_AUTH_DEST_DETAIL"]**: check the super account permissions of the destination database.
   * 
   * > Separate multiple item names with commas (,), for example, **["CHECK_SRC_DETAIL","CHECK_SAME_OBJ_DETAIL"]**.
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


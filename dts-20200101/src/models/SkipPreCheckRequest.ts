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
   * The ID of the precheck task. You can call the **DescribePreCheckStatus** operation to query the task ID.
   * 
   * @example
   * b4my3zg929a****
   */
  jobId?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
  /**
   * @remarks
   * Specifies whether to skip the precheck item. Valid values:
   * 
   * - **true**: Skips the precheck item.
   * - **false**: Does not skip the precheck item.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  skip?: boolean;
  /**
   * @remarks
   * The abbreviations of the precheck items to skip or unskip. Valid values:
   * 
   * - **["CHECK_SAME_OBJ"]**: Checks for the existence of objects with the same name.
   * - **["CHECK_SAME_USER"]**: Checks for the existence of accounts with different names.
   * - **["CHECK_SRC"]**: Checks the version of the source database.
   * - **["CHECK_TOPOLOGY"]**: Checks the topology version. For more information about the topology versions supported by DTS, see [Topology overview](https://help.aliyun.com/document_detail/124115.html).
   * - **["CHECK_SERVER_ID"]**: Checks the server_id of the source database.
   * - **["CHECK_DEST_TABLE_EMPTY"]**: Checks for the existence of objects in the destination database.
   * - **["CHECK_SUPER_AUTH_DEST"]**: Checks the permissions of the super account in the destination database.
   * 
   * > Separate multiple item names with commas (,), for example, **["CHECK_SRC","CHECK_SAME_OBJ"]**.
   * 
   * @example
   * ["CHECK_SAME_OBJ"]
   */
  skipPreCheckItems?: string;
  /**
   * @remarks
   * The names of the precheck items to skip or unskip. This parameter corresponds to the **SkipPreCheckItems** parameter. Valid values:
   * 
   * - **["CHECK_SAME_OBJ_DETAIL"]**: Checks for the existence of objects with the same name.
   * - **["CHECK_SAME_USER_DETAIL"]**: Checks for the existence of accounts with different names.
   * - **["CHECK_SRC_DETAIL"]**: Checks the version of the source database.
   * - **["CHECK_TOPOLOGY_DETAIL"]**: Checks the topology version. For more information about the topology versions supported by DTS, see [Topology overview](https://help.aliyun.com/document_detail/124115.html).
   * - **["CHECK_SERVER_ID_DETAIL"]**: Checks the server_id of the source database.
   * - **["CHECK_DEST_TABLE_EMPTY_DETAIL"]**: Checks whether the tables in the destination database are empty.
   * - **["CHECK_SUPER_AUTH_DEST_DETAIL"]**: Checks the permissions of the super account in the destination database.
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


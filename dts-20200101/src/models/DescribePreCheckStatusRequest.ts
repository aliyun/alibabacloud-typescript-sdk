// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The task code that specifies the type of the DTS subtask. Valid values:
   * 
   * *   **01**: precheck.
   * *   **02**: schema migration or initial schema synchronization.
   * *   **03**: full data migration or initial full data synchronization.
   * *   **04**: incremental data migration or synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  jobCode?: string;
  /**
   * @remarks
   * The filter item used to filter tables in fuzzy match.
   * 
   * @example
   * dewuprop
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The filter item used to filter tables, views, and functions during schema migration.
   * 
   * @example
   * View
   */
  structPhase?: string;
  /**
   * @remarks
   * The type of schema definition. Valid values:
   * 
   * *   **before**: schema migration or initial schema synchronization.
   * *   **after**: DDL operations performed during incremental data migration or synchronization.
   * 
   * @example
   * before
   */
  structType?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structPhase: 'StructPhase',
      structType: 'StructType',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobCode: 'string',
      name: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structPhase: 'string',
      structType: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


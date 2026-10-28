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
   * The task code. Set this parameter to specify the type of the subtask for the DTS task to query. Valid values:
   * 
   * - **01**: Precheck.
   * - **02**: Database and table structure migration or initialization.
   * - **03**: Full data migration or initialization.
   * - **04**: Incremental data migration or synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  jobCode?: string;
  /**
   * @remarks
   * The filter condition used to perform a fuzzy match on table names.
   * 
   * @example
   * dewuprop
   */
  name?: string;
  /**
   * @remarks
   * The page number. Valid values: an integer greater than **0** and less than or equal to the maximum value of the Integer data type. Default value: **1**.
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
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The filter condition for schema migration. Valid values: tables, views, and functions.
   * 
   * @example
   * View
   */
  structPhase?: string;
  /**
   * @remarks
   * The type of the schema definition. Valid values:
   * 
   * - **before**: Schema migration or initial schema synchronization.
   * - **after**: DDL operations in incremental data migration or synchronization.
   * 
   * @example
   * before
   */
  structType?: string;
  /**
   * @remarks
   * Specifies whether the task is a seamless integration (Zero-ETL) task. Valid values:
   * 
   * - **false**: No.
   * - **true**: Yes.
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


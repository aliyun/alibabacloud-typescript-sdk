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
   * The task code. Specify this parameter to query a specific subtask type of the DTS task. Valid values:
   * 
   * - **01**: precheck.
   * - **02**: schema migration or initial schema synchronization.
   * - **03**: full data migration or initial full data synchronization.
   * - **04**: incremental data migration or incremental data synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  jobCode?: string;
  /**
   * @remarks
   * The filter. Performs a fuzzy match on table names.
   * 
   * @example
   * dewuprop
   */
  name?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of records per page. Default value: **20**.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The filter. Filters tables, views, and functions in schema migration.
   * 
   * @example
   * View
   */
  structPhase?: string;
  /**
   * @remarks
   * The type of schema definition. Valid values:
   * 
   * - **before**: schema migration or initial schema synchronization.
   * - **after**: DDL operations during incremental data migration or incremental data synchronization.
   * 
   * @example
   * before
   */
  structType?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
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


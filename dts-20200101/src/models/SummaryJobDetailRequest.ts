// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SummaryJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration or data synchronization instance.
   * 
   * >  You must specify at least one of the DtsJobId and DtsInstanceId parameters.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * >  You must specify at least one of the DtsJobId and DtsInstanceId parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The phase of the data migration task. Valid values:
   * 
   * *   **02**: The task is in the schema migration phase.
   * *   **03**: The task is in the incremental migration phase.
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  jobCode?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek25bwhtt22cjq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of schema definition. Valid values:
   * 
   * *   **before**: schema migration or initial schema synchronization
   * *   **after**: DDL operations performed during incremental data migration or synchronization
   * 
   * @example
   * before
   */
  structType?: string;
  /**
   * @remarks
   * The synchronization direction of the data synchronization task. Valid values:
   * 
   * *   **Forward**: Data is synchronized from the source database to the destination database.
   * *   **Reverse**: Data is synchronized from the destination database to the source database.
   * 
   * > 
   * *   Default value: **Forward**.
   * *   You can set this parameter to **Reverse** to delete the reverse synchronization task only if the topology is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      jobCode: 'JobCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      structType: 'StructType',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      jobCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      structType: 'string',
      synchronizationDirection: 'string',
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


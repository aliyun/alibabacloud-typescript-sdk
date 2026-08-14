// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SummaryJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The migration or synchronization instance ID.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The migration phase. Valid values:
   * - **02**: schema migration phase.
   * - **03**: incremental data migration phase.
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  jobCode?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-aek2mjc4qlnog6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of schema definition. Valid values:
   * 
   * - **before**: schema migration or initial schema synchronization.
   * - **after**: DDL operations during incremental data migration or synchronization.
   * 
   * @example
   * before
   */
  structType?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - You can set this parameter to **Reverse** to release the reverse synchronization link only when the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (zero-ETL) node. Valid values:
   * - **true**: The node is a seamless integration node.
   * - **false**: The node is not a seamless integration node.
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


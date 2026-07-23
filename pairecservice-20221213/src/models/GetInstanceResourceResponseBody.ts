// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource category. Valid values:
   * 
   * - DataManagement
   * 
   * - Engine
   * 
   * - Monitor
   * 
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @remarks
   * The resource configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-13 17:34:52
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * If `Category` is `DataManagement`, the valid values are:
   * 
   * - storage
   * 
   * - modelpipeline
   * 
   * - datastorage
   * 
   * - modeltrain
   * 
   * If `Category` is `Engine`, the valid values are:
   * 
   * - feature
   * 
   * - predict
   * 
   * - recall
   * 
   * - recengine
   * 
   * If `Category` is `Monitor`, the valid values are:
   * 
   * - logs
   * 
   * - logsback
   * 
   * - coldstart
   * 
   * - deploy
   * 
   * @example
   * storage
   */
  group?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Hologres
   * 
   * - EAS
   * 
   * - BE
   * 
   * - Rec
   * 
   * - Platform
   * 
   * - SLS
   * 
   * - DataHub
   * 
   * - ApsaraMQ for Kafka
   * 
   * - Realtime Compute for Apache Flink
   * 
   * - ACR
   * 
   * - OSS
   * 
   * - DataWorks
   * 
   * - PAI
   * 
   * - MaxCompute
   * 
   * - Graph Compute Service
   * 
   * - ApsaraDB for Redis
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      group: 'Group',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      group: 'string',
      requestId: 'string',
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


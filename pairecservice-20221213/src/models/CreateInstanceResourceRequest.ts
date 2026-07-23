// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResourceRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * If the resource category is DataManagement, valid values are:
   * 
   * - storage
   * 
   * - modelpipeline
   * 
   * - datastorage
   * 
   * - modeltrain
   * 
   * If the resource category is Engine, valid values are:
   * 
   * - feature
   * 
   * - predict
   * 
   * - recall
   * 
   * - recengine
   * 
   * If the resource category is Monitor, valid values are:
   * 
   * - logs
   * 
   * - logsback
   * 
   * - coldstart
   * 
   * - deploy
   * 
   * This parameter is required.
   * 
   * @example
   * storage
   */
  group?: string;
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
   * - Graph Compute
   * 
   * - ApsaraDB for Redis
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
   * This parameter is required.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      group: 'Group',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      group: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the resource. Valid values:
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
   * The group of the resource.
   * 
   * If `Category` is `DataManagement`, valid values are:
   * 
   * - storage
   * 
   * - modelpipeline
   * 
   * - datastorage
   * 
   * - modeltrain
   * 
   * If `Category` is `Engine`, valid values are:
   * 
   * - feature
   * 
   * - predict
   * 
   * - recall
   * 
   * - recengine
   * 
   * If `Category` is `Monitor`, valid values are:
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
   * The type of the resource. If specified, only resources of this type are returned.
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
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      group: 'Group',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      group: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


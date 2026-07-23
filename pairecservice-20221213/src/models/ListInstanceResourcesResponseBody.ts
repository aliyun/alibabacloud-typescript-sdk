// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourcesResponseBodyResources extends $dara.Model {
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
   * The configuration of the resource.
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
  gmtCreateAt?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedAt?: string;
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
   * The resource ID.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
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
      gmtCreateAt: 'GmtCreateAt',
      gmtModifiedAt: 'GmtModifiedAt',
      group: 'Group',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateAt: 'string',
      gmtModifiedAt: 'string',
      group: 'string',
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

export class ListInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @remarks
   * A list of resource objects.
   */
  resources?: ListInstanceResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListInstanceResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


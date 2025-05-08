// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAnsServiceClustersResponseBodyDataAppDetail } from "./ListAnsServiceClustersResponseBodyDataAppDetail";
import { ListAnsServiceClustersResponseBodyDataClusters } from "./ListAnsServiceClustersResponseBodyDataClusters";


export class ListAnsServiceClustersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the associated application for which Microservices Governance is enabled when the Source parameter is set to governance.
   */
  appDetail?: ListAnsServiceClustersResponseBodyDataAppDetail;
  /**
   * @remarks
   * The cluster information.
   */
  clusters?: ListAnsServiceClustersResponseBodyDataClusters[];
  /**
   * @remarks
   * Indicates whether the service is a temporary service. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * true
   */
  ephemeral?: boolean;
  /**
   * @remarks
   * The service group to which the service belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The metadata of the service.
   * 
   * @example
   * 111
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * nacos.test.3
   */
  name?: string;
  /**
   * @remarks
   * The protection threshold.
   * 
   * @example
   * 0
   */
  protectThreshold?: number;
  /**
   * @remarks
   * The election mode.
   * 
   * @example
   * none
   */
  selectorType?: string;
  /**
   * @remarks
   * The source type of the service. Valid values:
   * 
   * *   console: The service was registered in the console.
   * *   sdk: The service was registered by using the SDK.
   * *   governance: The service was registered on Microservices Governance.
   * 
   * @example
   * console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appDetail: 'AppDetail',
      clusters: 'Clusters',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      metadata: 'Metadata',
      name: 'Name',
      protectThreshold: 'ProtectThreshold',
      selectorType: 'SelectorType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDetail: ListAnsServiceClustersResponseBodyDataAppDetail,
      clusters: { 'type': 'array', 'itemType': ListAnsServiceClustersResponseBodyDataClusters },
      ephemeral: 'boolean',
      groupName: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      protectThreshold: 'number',
      selectorType: 'string',
      source: 'string',
    };
  }

  validate() {
    if(this.appDetail && typeof (this.appDetail as any).validate === 'function') {
      (this.appDetail as any).validate();
    }
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IDs of applications. Separate application IDs with commas (,).
   * 
   * @example
   * hkhon1po62@c3df23522baa898,hkhon1po62@66e5235415730a5,hkhon1po62@958bba95910341f
   */
  appIds?: string;
  canaryModel?: number;
  /**
   * @remarks
   * Specifies whether to enable database canary release.
   * 
   * @example
   * true
   */
  dbGrayEnable?: boolean;
  /**
   * @remarks
   * The ingress application.
   * 
   * @example
   * Ingress
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the lane group. A value of -1 is used to create a lane group. A value greater than 0 is used to modify the specified lane group.
   * 
   * @example
   * 120
   */
  id?: number;
  /**
   * @remarks
   * The side for message filtering when the canary release for messaging feature is enabled.
   * 
   * @example
   * Server
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Specifies whether to enable canary release for messaging.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  messageQueueGrayEnable?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  paths?: string[];
  /**
   * @remarks
   * Specifies whether to record request details.
   */
  recordCanaryDetail?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  routeIds?: number[];
  /**
   * @remarks
   * The status of the lane group. The value 0 specifies that the lane group is disabled. The value 1 specifies that the lane group is enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  swimVersion?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appIds: 'AppIds',
      canaryModel: 'CanaryModel',
      dbGrayEnable: 'DbGrayEnable',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      paths: 'Paths',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      routeIds: 'RouteIds',
      status: 'Status',
      swimVersion: 'SwimVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appIds: 'string',
      canaryModel: 'number',
      dbGrayEnable: 'boolean',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      recordCanaryDetail: 'boolean',
      region: 'string',
      routeIds: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      swimVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


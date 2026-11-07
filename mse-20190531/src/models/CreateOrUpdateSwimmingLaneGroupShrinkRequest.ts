// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IDs of the applications. Separate multiple IDs with commas (,).
   * 
   * @example
   * xxxxn1po62@492b8f98d4bxxxx,xxxxn1po62@2d8f5d1b7f2xxxx
   */
  appIds?: string;
  /**
   * @remarks
   * The end-to-end canary release mode. Valid values:
   * - 0: Route by request content.
   * - 1: Route by proportion.
   * 
   * @example
   * 1
   */
  canaryModel?: number;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to enable canary release for databases.
   * 
   * @example
   * true
   */
  dbGrayEnable?: boolean;
  /**
   * @remarks
   * The entry application. Format: Source system:ID. Examples:
   * - mse:${MSE application ID}
   * - mse-gw:${MSE cloud-native gateway ID}
   * - apig:${cloud-native API gateway ID}
   * 
   * @example
   * mse-gw:gw-2b1407e050f1446xxxcd2a65fd9xxxx
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the swimlane group. A value of -1 indicates that a swimlane group is created. A value greater than 0 indicates that a specified swimlane group is updated.
   * 
   * @example
   * 120
   */
  id?: number;
  /**
   * @remarks
   * The side where message queue canary release filtering is performed.
   * 
   * @example
   * Server
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Specifies whether to enable canary release for message queues.
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
   * The name of the swimlane group.
   * 
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * **[Deprecated]** The paths. This parameter is required when a Java gateway is used as the entry point.
   */
  pathsShrink?: string;
  /**
   * @remarks
   * Specifies whether to record request details.
   * 
   * @example
   * false
   */
  recordCanaryDetail?: boolean;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The IDs of the routes. If a cloud-native gateway is used as the entry point, you must call this operation to pass the IDs of the selected cloud-native gateway routes before creating a swimlane for the swimlane group.
   */
  routeIdsShrink?: string;
  /**
   * @remarks
   * The status of the swimlane group. Valid values:
   * - 0: Inactive.
   * - 1: Active.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The version of the end-to-end canary release. Valid values:
   * - 0: Not recommended. Routes must be specified.
   * - 2: Recommended. Routes do not need to be specified.
   * 
   * @example
   * 2
   */
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
      pathsShrink: 'Paths',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      routeIdsShrink: 'RouteIds',
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
      pathsShrink: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      routeIdsShrink: 'string',
      status: 'number',
      swimVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


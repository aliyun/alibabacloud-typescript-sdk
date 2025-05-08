// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAllSwimmingLaneResponseBodyDataEntryRules } from "./QueryAllSwimmingLaneResponseBodyDataEntryRules";
import { QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute } from "./QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute";


export class QueryAllSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: string;
  entryRules?: QueryAllSwimmingLaneResponseBodyDataEntryRules[];
  gatewaySwimmingLaneRoute?: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute;
  gatewaySwimmingLaneRouteJson?: string;
  groupId?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  /**
   * @example
   * swimmingGroup
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  pathIndependentPercentageEnable?: boolean;
  recordCanaryDetail?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tag?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  enableRules?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRoute: 'GatewaySwimmingLaneRoute',
      gatewaySwimmingLaneRouteJson: 'GatewaySwimmingLaneRouteJson',
      groupId: 'GroupId',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
      recordCanaryDetail: 'RecordCanaryDetail',
      regionId: 'RegionId',
      tag: 'Tag',
      userId: 'UserId',
      enableRules: 'enableRules',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      entryRules: { 'type': 'array', 'itemType': QueryAllSwimmingLaneResponseBodyDataEntryRules },
      gatewaySwimmingLaneRoute: QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRoute,
      gatewaySwimmingLaneRouteJson: 'string',
      groupId: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      pathIndependentPercentageEnable: 'boolean',
      recordCanaryDetail: 'boolean',
      regionId: 'string',
      tag: 'string',
      userId: 'string',
      enableRules: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    if(this.gatewaySwimmingLaneRoute && typeof (this.gatewaySwimmingLaneRoute as any).validate === 'function') {
      (this.gatewaySwimmingLaneRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


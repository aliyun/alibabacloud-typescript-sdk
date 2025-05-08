// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrUpdateSwimmingLaneRequestEntryRules } from "./CreateOrUpdateSwimmingLaneRequestEntryRules";
import { CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson } from "./CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson";


export class CreateOrUpdateSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh and en. Default value: zh. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable the lane.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to configure a routing rule for the lane. If an Ingress gateway is used, this parameter is not required.
   * 
   * @example
   * false
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The JSON string.
   * 
   * @example
   * {}
   * 
   * @deprecated
   */
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneRequestEntryRules[];
  /**
   * @remarks
   * The information about the routing rule for the gateway. This parameter is required when a cloud-native gateway is used as the ingress.
   */
  gatewaySwimmingLaneRouteJson?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson;
  /**
   * @remarks
   * The language of the response. Valid values:****
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US**: English
   * 
   * > Default value: **zh-CN**.
   * 
   * @example
   * 115
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the primary key. The value -1 indicates a request that is used to create a lane. A value greater than 0 indicates a request that is used to modify a lane.
   * 
   * @example
   * -1
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * Test lane
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  pathIndependentPercentageEnable?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enable: 'Enable',
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRouteJson: 'GatewaySwimmingLaneRouteJson',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRules },
      gatewaySwimmingLaneRouteJson: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson,
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespace: 'string',
      pathIndependentPercentageEnable: 'boolean',
      regionId: 'string',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    if(this.gatewaySwimmingLaneRouteJson && typeof (this.gatewaySwimmingLaneRouteJson as any).validate === 'function') {
      (this.gatewaySwimmingLaneRouteJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


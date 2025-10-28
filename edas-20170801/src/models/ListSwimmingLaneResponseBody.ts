// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3b615783-01f1-4569-baa3-cb71bdb6****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * prod-app-58846
   */
  appName?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * edas-canary
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 348
   */
  laneId?: number;
  /**
   * @remarks
   * The association rule.
   * 
   * @example
   * ""
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      extra: 'Extra',
      laneId: 'LaneId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      extra: 'string',
      laneId: 'number',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the throttling rule is enabled.
   * 
   * @example
   * true
   */
  enableRules?: boolean;
  /**
   * @remarks
   * The conditions.
   * 
   * @example
   * [{\\"condition\\":\\"AND\\",\\"enable\\":true,\\"path\\":\\"/\\",\\"priority\\":1,\\"restItems\\":[{\\"cond\\":\\"==\\",\\"datum\\":\\"value\\",\\"name\\":\\"tags\\",\\"operator\\":\\"rawvalue\\",\\"type\\":\\"header\\",\\"value\\":\\"value\\"}]}]
   */
  entryRule?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 156
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 348
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the microservices namespace.
   * 
   * @example
   * cn-hangzhou:pre2
   */
  namespaceId?: string;
  /**
   * @remarks
   * The expected tag.
   * 
   * @example
   * d0ad1052
   */
  scenarioSign?: string;
  /**
   * @remarks
   * The applications that are related to the lane.
   */
  swimmingLaneAppRelationShipList?: ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * 2cb6b8a
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      scenarioSign: 'ScenarioSign',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRules: 'boolean',
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      scenarioSign: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.swimmingLaneAppRelationShipList)) {
      $dara.Model.validateArray(this.swimmingLaneAppRelationShipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: ListSwimmingLaneResponseBodyData[];
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CDBBF9-9C9A-5AA1-9F39-094ADEB3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


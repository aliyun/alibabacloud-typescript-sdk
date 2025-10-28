// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * bd170895-096c-4944-9007-d4582c77****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 88
   */
  laneId?: number;
  /**
   * @remarks
   * The association rule.
   * 
   * @example
   * dubbo
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      laneId: 'LaneId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
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

export class InsertSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applications that are associated with lanes.
   * 
   * @example
   * [{"appId":"9dcba109-ee9f-4e67-8916-41
   * *******"}]
   */
  appInfos?: string;
  /**
   * @remarks
   * The throttling rule for the lane.
   * 
   * priority: the priority of the throttling rule for the lane. Valid values: 1 to 100.
   * 
   * path: the path that is matched by the throttling rule for the lane.
   * 
   * restItems: conditions to be met.
   * 
   * condition: the relationship among the conditions to be met.
   * 
   * *   AND: all conditions
   * *   OR: one of the conditions
   * 
   * restItems.type: the type of the rule. Valid values:
   * 
   * *   header: matches by request header.
   * *   cookie: matches by request cookie.
   * *   param: matches by request parameters.
   * 
   * restItems.name: the key that matches the rule.
   * 
   * restItems.value: the value that matches the rule.
   * 
   * restItems.cond: the condition that matches the rule. Valid values:
   * 
   * *   "==": The parameter value is equal to the value that you enter in the Value field.
   * *   "!=": The parameter value is not equal to the value that you enter in the Value field.
   * *   ">": The parameter value is greater than the value that you enter in the Value field.
   * *   "<": The parameter value is less than the value that you enter in the Value field.
   * *   ">=": The parameter value is greater than or equal to the value that you enter in the Value field.
   * *   "<=": The parameter value is less than or equal to the value that you enter in the Value field.
   * *   "in": The parameter value is within the values that you enter in the Value field.
   * 
   * restItems.operator: the type of the value. Valid values:
   * 
   * *   rawvalue: the initial value
   * *   mod: the reminder obtained by performing modulo operation
   * *   list: the value from the list
   * 
   * @example
   * [{\\"condition\\":\\"AND\\",\\"enable\\":false,\\"path\\":\\"/traffic\\",\\"priority\\":1,\\"restItems\\":[{\\"cond\\":\\"==\\",\\"datum\\":\\"testvalue\\",\\"name\\":\\"testheader\\",\\"operator\\":\\"rawvalue\\",\\"type\\":\\"header\\",\\"value\\":\\"testvalue\\"}]}]
   */
  entryRule?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 95
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 88
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The association relationships between lanes and applications.
   */
  swimmingLaneAppRelationShipList?: InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * 8202e09
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      entryRule: 'EntryRule',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      namespaceId: 'NamespaceId',
      swimmingLaneAppRelationShipList: 'SwimmingLaneAppRelationShipList',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: 'string',
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': InsertSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
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

export class InsertSwimmingLaneResponseBody extends $dara.Model {
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
  data?: InsertSwimmingLaneResponseBodyData;
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
   * 75972A87-5682-5277-ADA7-DA2A01BE****
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
      data: InsertSwimmingLaneResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


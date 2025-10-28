// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 476d26d9-b54c-40b8-8af9-d898cdc2****
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
   * 321
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

export class UpdateSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule of the lane.
   * 
   * @example
   * [{\\"condition\\":\\"AND\\",\\"enable\\":true,\\"path\\":\\"/traffictest\\",\\"priority\\":1,\\"restItems\\":[{\\"cond\\":\\"==\\",\\"datum\\":\\"testheadervalue\\",\\"name\\":\\"testheader\\",\\"operator\\":\\"rawvalue\\",\\"type\\":\\"header\\",\\"value\\":\\"testheadervalue\\"}]}]"
   */
  entryRule?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 171
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 321
   */
  id?: number;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * test-swimlane
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:qa
   */
  namespaceId?: string;
  /**
   * @remarks
   * The list of associations between the lane and the related application.
   */
  swimmingLaneAppRelationShipList?: UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList[];
  /**
   * @remarks
   * The tag of the lane.
   * 
   * @example
   * 2cb6b8a
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
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
      entryRule: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      namespaceId: 'string',
      swimmingLaneAppRelationShipList: { 'type': 'array', 'itemType': UpdateSwimmingLaneResponseBodyDataSwimmingLaneAppRelationShipList },
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

export class UpdateSwimmingLaneResponseBody extends $dara.Model {
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
  data?: UpdateSwimmingLaneResponseBodyData;
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
   * 6CB46AEA-309C-5041-9EC7-FCF4478F****
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
      data: UpdateSwimmingLaneResponseBodyData,
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


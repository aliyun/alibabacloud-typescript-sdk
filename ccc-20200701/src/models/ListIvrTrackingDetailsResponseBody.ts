// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIvrTrackingDetailsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 0533128****
   */
  callee?: string;
  /**
   * @example
   * 1332315****
   */
  caller?: string;
  /**
   * @example
   * 65cp2c15-92ac-4e67-98b2-073a3c541c5d
   */
  channelId?: string;
  /**
   * @example
   * A=B;C=D
   */
  channelVariables?: string;
  /**
   * @example
   * job-10963442671187****
   */
  contactId?: string;
  /**
   * @example
   * 1621910542876
   */
  enterTime?: number;
  /**
   * @example
   * abc99462-1058-47d0-a114-f145ea7444ff
   */
  flowId?: string;
  flowName?: string;
  /**
   * @example
   * ccc-test
   */
  instance?: string;
  /**
   * @example
   * 1621910545105
   */
  leaveTime?: number;
  /**
   * @example
   * Success
   */
  nodeExitCode?: string;
  /**
   * @example
   * e0bc19a3
   */
  nodeId?: string;
  nodeName?: string;
  nodeProperties?: { [key: string]: any };
  /**
   * @example
   * PLAY_OR_SAY
   */
  nodeType?: string;
  /**
   * @example
   * {"digits":"2"}
   */
  nodeVariables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      channelId: 'ChannelId',
      channelVariables: 'ChannelVariables',
      contactId: 'ContactId',
      enterTime: 'EnterTime',
      flowId: 'FlowId',
      flowName: 'FlowName',
      instance: 'Instance',
      leaveTime: 'LeaveTime',
      nodeExitCode: 'NodeExitCode',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeProperties: 'NodeProperties',
      nodeType: 'NodeType',
      nodeVariables: 'NodeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      channelId: 'string',
      channelVariables: 'string',
      contactId: 'string',
      enterTime: 'number',
      flowId: 'string',
      flowName: 'string',
      instance: 'string',
      leaveTime: 'number',
      nodeExitCode: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeType: 'string',
      nodeVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.nodeProperties) {
      $dara.Model.validateMap(this.nodeProperties);
    }
    if(this.nodeVariables) {
      $dara.Model.validateMap(this.nodeVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBodyData extends $dara.Model {
  list?: ListIvrTrackingDetailsResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListIvrTrackingDetailsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIvrTrackingDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListIvrTrackingDetailsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * D2RB671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIvrTrackingDetailsResponseBodyData,
      httpStatusCode: 'number',
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


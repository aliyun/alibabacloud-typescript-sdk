// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIvrTrackingDetailsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Callee number.
   * 
   * @example
   * 0533128****
   */
  callee?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 1332315****
   */
  caller?: string;
  /**
   * @remarks
   * Voice channel ID.
   * 
   * @example
   * 65cp2c15-92ac-4e67-98b2-073a3c541c5d
   */
  channelId?: string;
  /**
   * @remarks
   * Channel-associated data.
   * 
   * @example
   * A=B;C=D
   */
  channelVariables?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-10963442671187****
   */
  contactId?: string;
  /**
   * @remarks
   * The time when the call entered this IVR edge zone, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1621910542876
   */
  enterTime?: number;
  /**
   * @remarks
   * Contact flow ID.
   * 
   * @example
   * abc99462-1058-47d0-a114-f145ea7444ff
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the contact flow.
   * 
   * @example
   * 测试IVR
   */
  flowName?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instance?: string;
  /**
   * @remarks
   * Time when leaving this IVR node.
   * 
   * @example
   * 1621910545105
   */
  leaveTime?: number;
  /**
   * @remarks
   * Status code of the edge zone.
   * 
   * @example
   * Success
   */
  nodeExitCode?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * e0bc19a3
   */
  nodeId?: string;
  /**
   * @remarks
   * Edge zone name.
   * 
   * @example
   * 放音
   */
  nodeName?: string;
  /**
   * @remarks
   * A collection of properties of the edge zone.
   * 
   * @example
   * {"say":"您好。"}
   */
  nodeProperties?: { [key: string]: any };
  /**
   * @remarks
   * File Type.
   * 
   * @example
   * PLAY_SAY
   */
  nodeType?: string;
  /**
   * @remarks
   * Node variables.
   * 
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
  /**
   * @remarks
   * List of IVR tracking details.
   */
  list?: ListIvrTrackingDetailsResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListIvrTrackingDetailsResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
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


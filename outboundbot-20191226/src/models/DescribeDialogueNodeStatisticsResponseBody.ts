// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDialogueNodeStatisticsResponseBodyHangUpDialogueNodes extends $dara.Model {
  /**
   * @remarks
   * Number of hang-ups
   * 
   * @example
   * 2
   */
  hangUpNum?: number;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  nodeId?: string;
  /**
   * @remarks
   * Node name
   * 
   * @example
   * xxx
   */
  nodeName?: string;
  /**
   * @remarks
   * Proportion of quantity
   * 
   * @example
   * 100%
   */
  rateDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      hangUpNum: 'HangUpNum',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      rateDisplay: 'RateDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hangUpNum: 'number',
      nodeId: 'string',
      nodeName: 'string',
      rateDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes extends $dara.Model {
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89
   */
  groupId?: string;
  /**
   * @remarks
   * Number of hang-ups
   * 
   * @example
   * 2
   */
  hangUpNum?: number;
  /**
   * @remarks
   * Number of hits
   * 
   * @example
   * 12
   */
  hitNum?: number;
  /**
   * @remarks
   * ID, unique identifier
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of no-answers
   * 
   * @example
   * 2
   */
  noAnswerNum?: number;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  nodeId?: string;
  /**
   * @remarks
   * Node name
   * 
   * @example
   * xxx
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hangUpNum: 'HangUpNum',
      hitNum: 'HitNum',
      id: 'Id',
      instanceId: 'InstanceId',
      noAnswerNum: 'NoAnswerNum',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hangUpNum: 'number',
      hitNum: 'number',
      id: 'string',
      instanceId: 'string',
      noAnswerNum: 'number',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89
   */
  groupId?: string;
  /**
   * @remarks
   * Hang-up nodes
   */
  hangUpDialogueNodes?: DescribeDialogueNodeStatisticsResponseBodyHangUpDialogueNodes[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * No-answer nodes
   * 
   * @example
   * []
   */
  noAnswerDialogueNodes?: DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Number of completed tasks in the task group
   * 
   * @example
   * 13
   */
  totalCompleted?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      hangUpDialogueNodes: 'HangUpDialogueNodes',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      noAnswerDialogueNodes: 'NoAnswerDialogueNodes',
      requestId: 'RequestId',
      success: 'Success',
      totalCompleted: 'TotalCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'string',
      hangUpDialogueNodes: { 'type': 'array', 'itemType': DescribeDialogueNodeStatisticsResponseBodyHangUpDialogueNodes },
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      noAnswerDialogueNodes: { 'type': 'array', 'itemType': DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes },
      requestId: 'string',
      success: 'boolean',
      totalCompleted: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hangUpDialogueNodes)) {
      $dara.Model.validateArray(this.hangUpDialogueNodes);
    }
    if(Array.isArray(this.noAnswerDialogueNodes)) {
      $dara.Model.validateArray(this.noAnswerDialogueNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


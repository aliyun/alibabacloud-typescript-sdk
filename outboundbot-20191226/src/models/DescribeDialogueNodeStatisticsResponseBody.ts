// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDialogueNodeStatisticsResponseBodyHangUpDialogueNodes extends $dara.Model {
  hangUpNum?: number;
  nodeId?: string;
  nodeName?: string;
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
   * @example
   * f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89
   */
  groupId?: string;
  /**
   * @example
   * 2
   */
  hangUpNum?: number;
  /**
   * @example
   * 12
   */
  hitNum?: number;
  /**
   * @remarks
   * id
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  noAnswerNum?: number;
  /**
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  nodeId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * f06f7c9f-2895-4b30-a8c2-6ecccb9c9f89
   */
  groupId?: string;
  hangUpDialogueNodes?: DescribeDialogueNodeStatisticsResponseBodyHangUpDialogueNodes[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * []
   */
  noAnswerDialogueNodes?: DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes[];
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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


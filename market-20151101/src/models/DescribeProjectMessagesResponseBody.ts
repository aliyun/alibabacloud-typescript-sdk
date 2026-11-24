// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMessagesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * Dear customer, we have uploaded the solution for you. Please review it and provide your feedback as soon as possible
   */
  content?: string;
  /**
   * @remarks
   * The time when the message was created. The value is a UNIX timestamp.
   * 
   * @example
   * 1589015560000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the message sender.
   * 
   * @example
   * 452611111****
   */
  operator?: number;
  /**
   * @remarks
   * The name of the message sender.
   * 
   * @example
   * *** Technology Co., Ltd
   */
  operatorName?: string;
  /**
   * @remarks
   * The role of the operator. Valid values:
   * 
   * - System: The system.
   * - Custom: The customer.
   * - Provider: The service provider.
   * 
   * @example
   * Provider
   */
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00eb4de1-6cff-4f56-833e-7b1e070e398d
   */
  requestId?: string;
  /**
   * @remarks
   * The list of project messages.
   */
  result?: DescribeProjectMessagesResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of messages.
   * 
   * @example
   * 28
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectMessagesResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


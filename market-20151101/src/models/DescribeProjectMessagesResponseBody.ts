// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMessagesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * 尊敬的客户您好，我们已经为您上传了方案，请您查阅，然后尽快将您的意见反馈给我们。
   */
  content?: string;
  /**
   * @remarks
   * The time when the message was created, in UNIX timestamp format.
   * 
   * @example
   * 1589015560000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the user who left the message.
   * 
   * @example
   * 452611111****
   */
  operator?: number;
  /**
   * @remarks
   * The name of the user who left the message.
   * 
   * @example
   * ***科技技术有限公司
   */
  operatorName?: string;
  /**
   * @remarks
   * The role of the operator. Valid values:
   * 
   * - System: system.
   * - Custom: customer.
   * - Provider: service provider.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadOutboundTaskCallListRequest extends $dara.Model {
  /**
   * @example
   * 1735689600000
   */
  callEndTimeBegin?: number;
  /**
   * @example
   * 1767225600000
   */
  callEndTimeEnd?: number;
  /**
   * @example
   * 1735689600000
   */
  callStartTimeBegin?: number;
  /**
   * @example
   * 1767225600000
   */
  callStartTimeEnd?: number;
  /**
   * @example
   * abc123***
   */
  callerUacAccountId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * abc123***
   */
  currentWorkspaceId?: string;
  /**
   * @example
   * 张先生
   */
  customerNameOrPhone?: string;
  /**
   * @example
   * ["1", "2"]
   */
  displayStatusList?: string[];
  /**
   * @example
   * ["有意向", "高净值"]
   */
  labelTags?: string[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 51CC272E-D879-1B23-B98E-FCFB072D362B
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 1
   */
  taskId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callEndTimeBegin: 'CallEndTimeBegin',
      callEndTimeEnd: 'CallEndTimeEnd',
      callStartTimeBegin: 'CallStartTimeBegin',
      callStartTimeEnd: 'CallStartTimeEnd',
      callerUacAccountId: 'CallerUacAccountId',
      current: 'Current',
      currentWorkspaceId: 'CurrentWorkspaceId',
      customerNameOrPhone: 'CustomerNameOrPhone',
      displayStatusList: 'DisplayStatusList',
      labelTags: 'LabelTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callEndTimeBegin: 'number',
      callEndTimeEnd: 'number',
      callStartTimeBegin: 'number',
      callStartTimeEnd: 'number',
      callerUacAccountId: 'string',
      current: 'number',
      currentWorkspaceId: 'string',
      customerNameOrPhone: 'string',
      displayStatusList: { 'type': 'array', 'itemType': 'string' },
      labelTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.displayStatusList)) {
      $dara.Model.validateArray(this.displayStatusList);
    }
    if(Array.isArray(this.labelTags)) {
      $dara.Model.validateArray(this.labelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


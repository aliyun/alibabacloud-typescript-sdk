// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadOutboundTaskCallListRequestStructuredLabelTags extends $dara.Model {
  /**
   * @example
   * 是否有意向
   */
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * 1ab92c
   */
  currentWorkspaceCode?: string;
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
   * ["WITHIN_15_SECONDS", "FROM_1_TO_3_MINUTES"]
   */
  durationRangeList?: string[];
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
  structuredLabelTags?: ReadOutboundTaskCallListRequestStructuredLabelTags[];
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
      currentWorkspaceCode: 'CurrentWorkspaceCode',
      currentWorkspaceId: 'CurrentWorkspaceId',
      customerNameOrPhone: 'CustomerNameOrPhone',
      displayStatusList: 'DisplayStatusList',
      durationRangeList: 'DurationRangeList',
      labelTags: 'LabelTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      structuredLabelTags: 'StructuredLabelTags',
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
      currentWorkspaceCode: 'string',
      currentWorkspaceId: 'string',
      customerNameOrPhone: 'string',
      displayStatusList: { 'type': 'array', 'itemType': 'string' },
      durationRangeList: { 'type': 'array', 'itemType': 'string' },
      labelTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      structuredLabelTags: { 'type': 'array', 'itemType': ReadOutboundTaskCallListRequestStructuredLabelTags },
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.displayStatusList)) {
      $dara.Model.validateArray(this.displayStatusList);
    }
    if(Array.isArray(this.durationRangeList)) {
      $dara.Model.validateArray(this.durationRangeList);
    }
    if(Array.isArray(this.labelTags)) {
      $dara.Model.validateArray(this.labelTags);
    }
    if(Array.isArray(this.structuredLabelTags)) {
      $dara.Model.validateArray(this.structuredLabelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicResponseBodyTopicInfoListPolicyInfoList extends $dara.Model {
  /**
   * @example
   * 412
   */
  policyId?: number;
  /**
   * @example
   * bqi1c3s99qx3
   */
  policyIdentifier?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyIdentifier: 'PolicyIdentifier',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyIdentifier: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyTopicInfoList extends $dara.Model {
  /**
   * @example
   * 1597738932000
   */
  gmtModified?: number;
  policyInfoList?: ListTopicResponseBodyTopicInfoListPolicyInfoList[];
  topicDefinition?: string;
  /**
   * @example
   * 216
   */
  topicId?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      policyInfoList: 'PolicyInfoList',
      topicDefinition: 'TopicDefinition',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      policyInfoList: { 'type': 'array', 'itemType': ListTopicResponseBodyTopicInfoListPolicyInfoList },
      topicDefinition: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyInfoList)) {
      $dara.Model.validateArray(this.policyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
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
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  topicInfoList?: ListTopicResponseBodyTopicInfoList[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      topicInfoList: 'TopicInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      topicInfoList: { 'type': 'array', 'itemType': ListTopicResponseBodyTopicInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topicInfoList)) {
      $dara.Model.validateArray(this.topicInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBodyPolicyInfoList extends $dara.Model {
  /**
   * @example
   * 16
   */
  policyId?: number;
  /**
   * @example
   * x1bc5xgs4uhx
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

export class GetTopicResponseBodyTopicExampleInfoList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2
   */
  exampleId?: number;
  /**
   * @example
   * 0
   */
  exampleType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      exampleId: 'ExampleId',
      exampleType: 'ExampleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      exampleId: 'number',
      exampleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * 1634122349000
   */
  gmtModified?: number;
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
  policyInfoList?: GetTopicResponseBodyPolicyInfoList[];
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
  topicDefinition?: string;
  topicExampleInfoList?: GetTopicResponseBodyTopicExampleInfoList[];
  /**
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gmtModified: 'GmtModified',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      policyInfoList: 'PolicyInfoList',
      requestId: 'RequestId',
      success: 'Success',
      topicDefinition: 'TopicDefinition',
      topicExampleInfoList: 'TopicExampleInfoList',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gmtModified: 'number',
      httpStatusCode: 'number',
      message: 'string',
      policyInfoList: { 'type': 'array', 'itemType': GetTopicResponseBodyPolicyInfoList },
      requestId: 'string',
      success: 'boolean',
      topicDefinition: 'string',
      topicExampleInfoList: { 'type': 'array', 'itemType': GetTopicResponseBodyTopicExampleInfoList },
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyInfoList)) {
      $dara.Model.validateArray(this.policyInfoList);
    }
    if(Array.isArray(this.topicExampleInfoList)) {
      $dara.Model.validateArray(this.topicExampleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


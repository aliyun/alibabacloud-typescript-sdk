// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicRequestBodyDataTopicExampleInfoList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 0
   */
  exampleType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      exampleType: 'ExampleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class UpdateTopicRequestBodyData extends $dara.Model {
  topicExampleInfoList?: UpdateTopicRequestBodyDataTopicExampleInfoList[];
  static names(): { [key: string]: string } {
    return {
      topicExampleInfoList: 'TopicExampleInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicExampleInfoList: { 'type': 'array', 'itemType': UpdateTopicRequestBodyDataTopicExampleInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.topicExampleInfoList)) {
      $dara.Model.validateArray(this.topicExampleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicRequest extends $dara.Model {
  bodyData?: UpdateTopicRequestBodyData;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicDefinition?: string;
  /**
   * @example
   * 216
   */
  topicId?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      regionId: 'RegionId',
      topicDefinition: 'TopicDefinition',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: UpdateTopicRequestBodyData,
      regionId: 'string',
      topicDefinition: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


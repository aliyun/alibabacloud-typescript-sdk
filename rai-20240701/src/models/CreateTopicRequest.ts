// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequestBodyDataTopicExampleInfoList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1
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

export class CreateTopicRequestBodyData extends $dara.Model {
  topicExampleInfoList?: CreateTopicRequestBodyDataTopicExampleInfoList[];
  static names(): { [key: string]: string } {
    return {
      topicExampleInfoList: 'TopicExampleInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicExampleInfoList: { 'type': 'array', 'itemType': CreateTopicRequestBodyDataTopicExampleInfoList },
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

export class CreateTopicRequest extends $dara.Model {
  bodyData?: CreateTopicRequestBodyData;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicDefinition?: string;
  topicName?: string;
  /**
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      regionId: 'RegionId',
      topicDefinition: 'TopicDefinition',
      topicName: 'TopicName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: CreateTopicRequestBodyData,
      regionId: 'string',
      topicDefinition: 'string',
      topicName: 'string',
      workspaceId: 'number',
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


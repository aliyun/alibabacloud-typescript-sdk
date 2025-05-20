// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicAttributesRequestTag } from "./GetTopicAttributesRequestTag";


export class GetTopicAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The tag.
   */
  tag?: GetTopicAttributesRequestTag[];
  /**
   * @remarks
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': GetTopicAttributesRequestTag },
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicInfluenceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


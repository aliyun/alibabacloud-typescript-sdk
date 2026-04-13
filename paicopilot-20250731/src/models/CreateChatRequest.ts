// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatDetail } from "./ChatDetail";


export class CreateChatRequest extends $dara.Model {
  /**
   * @example
   * {"solutionDetail":{"formValues":{"params":{"InstanceId":"dsw-g54******qg9"},"content":{"EcsSpec":"ecs.gn6i-c8g1.2xlarge"}},"success":true}}
   */
  extraData?: string;
  payload?: { [key: string]: any };
  question?: ChatDetail;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extraData: 'ExtraData',
      payload: 'Payload',
      question: 'Question',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraData: 'string',
      payload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      question: ChatDetail,
      title: 'string',
    };
  }

  validate() {
    if(this.payload) {
      $dara.Model.validateMap(this.payload);
    }
    if(this.question && typeof (this.question as any).validate === 'function') {
      (this.question as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


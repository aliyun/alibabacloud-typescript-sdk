// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupLagRequest extends $dara.Model {
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * normal-topic-1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


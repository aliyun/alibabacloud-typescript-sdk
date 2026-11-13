// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * Used to group production API consumers
   */
  description?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * api-consumer-group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


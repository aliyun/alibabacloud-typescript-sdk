// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerGroupRequest extends $dara.Model {
  /**
   * @example
   * 用于线上 API 调用方分组
   */
  description?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRuntimeVersionInput extends $dara.Model {
  /**
   * @remarks
   * 此版本的描述
   */
  description?: string;
  /**
   * @remarks
   * 发布此版本的用户或系统标识
   * 
   * @example
   * user123
   */
  publisher?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      publisher: 'publisher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      publisher: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


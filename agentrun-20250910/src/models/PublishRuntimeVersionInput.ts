// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRuntimeVersionInput extends $dara.Model {
  /**
   * @remarks
   * 此版本的描述
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


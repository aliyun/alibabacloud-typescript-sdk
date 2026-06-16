// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRuntimeVersionInput extends $dara.Model {
  /**
   * @remarks
   * Description of this version
   */
  description?: string;
  /**
   * @remarks
   * Identity of the user or system that publishes this version
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModuleResponseBody extends $dara.Model {
  /**
   * @example
   * mod-518855d9a058cfffcc446d8fe3c99
   */
  moduleId?: string;
  /**
   * @example
   * 0D797DC3-FF04-5C21-81EB-92C7799512E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'moduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


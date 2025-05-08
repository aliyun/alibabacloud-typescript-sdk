// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 6e49109bfeb94a39bb268f4e483ccxxx
   */
  promptTemplateId?: string;
  /**
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promptTemplateId: 'promptTemplateId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptTemplateId: 'string',
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


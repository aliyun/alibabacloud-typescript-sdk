// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectLanguageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sourceText?: string;
  static names(): { [key: string]: string } {
    return {
      sourceText: 'SourceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


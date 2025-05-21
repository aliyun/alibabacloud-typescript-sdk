// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Language Type:
   * zh: Chinese
   * en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


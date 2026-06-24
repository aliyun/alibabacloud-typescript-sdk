// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDiagnosisSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  body?: string;
  /**
   * @remarks
   * The language of the response. Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


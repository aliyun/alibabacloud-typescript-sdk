// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisItemsRequest extends $dara.Model {
  instanceId?: string;
  /**
   * @remarks
   * The language of the request. Default value: the browser language. Valid values:
   * 
   * - en: English
   * - zh: Simplified Chinese
   * - zt: Traditional Chinese
   * - es: Spanish
   * - fr: French.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The diagnostic items.
   */
  diagnoseItems?: string[];
  /**
   * @remarks
   * The list of indexes to diagnose.
   */
  indices?: string[];
  /**
   * @remarks
   * The type of the diagnostic task. Valid values:
   * 
   * - ALL: Diagnoses all indexes.
   * - SELECT: Diagnoses selected indexes.
   * 
   * @example
   * ALL
   */
  type?: string;
  /**
   * @remarks
   * The language of the report. Default value: browser language. Valid values:
   * 
   * - en: English
   * - zh: Simplified Chinese
   * - zt: Traditional Chinese
   * - es: Spanish
   * - fr: French
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diagnoseItems: 'diagnoseItems',
      indices: 'indices',
      type: 'type',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diagnoseItems: { 'type': 'array', 'itemType': 'string' },
      indices: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnoseItems)) {
      $dara.Model.validateArray(this.diagnoseItems);
    }
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-v0h14zdee000mimee
   */
  instanceId?: string;
  /**
   * @remarks
   * The supported request language. Default value: the browser request language. Valid values:
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
  /**
   * @remarks
   * The diagnostic item level. Valid values:
   * 
   * - BASIC: basic inspection item (free).
   * - ADVANCED: advanced inspection item (consumes billable tokens).
   * 
   * If this parameter is not specified, diagnostic items of all levels are returned.
   * 
   * @example
   * BASIC
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      lang: 'lang',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


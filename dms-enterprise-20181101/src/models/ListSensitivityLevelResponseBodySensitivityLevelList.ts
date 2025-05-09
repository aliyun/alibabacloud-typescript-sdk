// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitivityLevelResponseBodySensitivityLevelList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the fields of the sensitive level are displayed in plaintext.
   * 
   * @example
   * true
   */
  isPlain?: boolean;
  /**
   * @remarks
   * The name of the sensitive level.
   * 
   * @example
   * S2
   */
  name?: string;
  /**
   * @remarks
   * The ID of the classification template.
   * 
   * @example
   * 1070
   */
  templateId?: string;
  /**
   * @remarks
   * The type of the classification template. Valid values:
   * 
   * *   **INNER**: a built-in template.
   * *   **USER_DEFINE**: a custom template.
   * 
   * @example
   * INNER
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      isPlain: 'IsPlain',
      name: 'Name',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPlain: 'boolean',
      name: 'string',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


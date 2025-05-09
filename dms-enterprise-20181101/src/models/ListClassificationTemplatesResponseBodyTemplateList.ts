// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassificationTemplatesResponseBodyTemplateList extends $dara.Model {
  /**
   * @remarks
   * The name of the classification template.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the classification template.
   * 
   * @example
   * 3**
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification template. Valid values:
   * 
   * *   **INNER**: built-in template
   * *   **USER_DEFINE**: custom template
   * 
   * @example
   * USER_DEFINE
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
      templateId: 'number',
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


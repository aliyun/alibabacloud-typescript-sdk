// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormComponentDefinitionListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * FooterYida
   */
  componentName?: string;
  /**
   * @example
   * formContainer_kksjiuk
   */
  fieldId?: string;
  /**
   * @example
   * {"en_US":""}
   */
  label?: string;
  /**
   * @example
   * formContainer_kksjiuk
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      fieldId: 'FieldId',
      label: 'Label',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      fieldId: 'string',
      label: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


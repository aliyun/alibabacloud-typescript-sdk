// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyTemplatesTags extends $dara.Model {
  /**
   * @remarks
   * Tag key of the template.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * Tag value of the template.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


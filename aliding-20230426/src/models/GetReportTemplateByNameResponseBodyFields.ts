// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateByNameResponseBodyFields extends $dara.Model {
  /**
   * @example
   * key1
   */
  fieldName?: string;
  /**
   * @example
   * 0
   */
  sort?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      sort: 'Sort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      sort: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


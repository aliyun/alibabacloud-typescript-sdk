// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateColumnBusinessMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The field business description.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The field ID. You can refer to the response from the ListColumns operation. You can also refer to the [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-column:11075xxxx::test_project:test_schema:test_table:test_column
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


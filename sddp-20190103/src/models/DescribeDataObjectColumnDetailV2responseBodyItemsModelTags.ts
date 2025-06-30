// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailV2ResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * ID corresponding to the data tag name. Values:
   * - **101**: Personal Sensitive Information
   * - **102**: Personal Information
   * - **107**: General Information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Data tag name. Values:
   * - Personal Sensitive Information
   * - Personal Information
   * - General Information
   * 
   * @example
   * personal sensitive information
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


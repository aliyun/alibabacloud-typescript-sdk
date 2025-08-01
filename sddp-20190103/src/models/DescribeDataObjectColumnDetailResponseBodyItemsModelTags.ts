// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * ID corresponding to the data tag name. Possible values:
   * - **101**：Personal sensitive information
   * - **102**：Personal information
   * - **107**：General information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Data tag name. Possible values:
   * - **101**：Personal sensitive information
   * - **102**：Personal information
   * - **107**：General information
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


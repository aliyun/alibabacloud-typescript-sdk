// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * Data tag ID. Values:
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **107**: General information.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Data tag name. Values:
   * - **Personal sensitive information.**
   * - **Personal information.**
   * - **General information.**
   * 
   * @example
   * Personal sensitive information
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


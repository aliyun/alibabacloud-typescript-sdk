// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The tag ID.
   * 
   * *   **101**: sensitive personal information
   * *   **102**: personal information
   * *   **103**: important information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * *   Sensitive personal information
   * *   Personal information
   * *   Important information
   * 
   * @example
   * personal sensitive data
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


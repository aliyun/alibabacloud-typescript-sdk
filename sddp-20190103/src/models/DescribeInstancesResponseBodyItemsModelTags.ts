// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyItemsModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag. Valid values:
   * 
   * *   **101**: personal sensitive information
   * *   **102**: personal information
   * *   **107**: general information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the tag. Valid values:
   * 
   * *   Personal sensitive information
   * *   Personal information
   * *   General information
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


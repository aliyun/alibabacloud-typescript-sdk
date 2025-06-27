// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionTaskResponseBodyCheckResourceList extends $dara.Model {
  /**
   * @example
   * CheckAll
   */
  checkScope?: string;
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      checkScope: 'CheckScope',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkScope: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


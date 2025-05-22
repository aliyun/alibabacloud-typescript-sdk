// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsResponseBodyResourceGroupPolicies extends $dara.Model {
  /**
   * @example
   * pl-a8jnatl8kjasb***
   */
  id?: string;
  /**
   * @example
   * False
   */
  isDefault?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDefault: 'boolean',
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


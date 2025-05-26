// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnabledPrivilegesResponseBodyDataPrivileges extends $dara.Model {
  /**
   * @remarks
   * The description of the permission.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * select
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


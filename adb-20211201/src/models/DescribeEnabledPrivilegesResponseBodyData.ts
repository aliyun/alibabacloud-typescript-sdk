// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnabledPrivilegesResponseBodyDataPrivileges } from "./DescribeEnabledPrivilegesResponseBodyDataPrivileges";


export class DescribeEnabledPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the permission level.
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * The queried permissions.
   * 
   * This parameter is required.
   */
  privileges?: DescribeEnabledPrivilegesResponseBodyDataPrivileges[];
  /**
   * @remarks
   * The permission level.
   * 
   * This parameter is required.
   * 
   * @example
   * Global
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      privileges: 'Privileges',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      privileges: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyDataPrivileges },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


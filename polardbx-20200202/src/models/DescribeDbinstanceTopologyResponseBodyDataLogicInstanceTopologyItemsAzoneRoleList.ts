// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-a
   */
  azone?: string;
  /**
   * @example
   * leader
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


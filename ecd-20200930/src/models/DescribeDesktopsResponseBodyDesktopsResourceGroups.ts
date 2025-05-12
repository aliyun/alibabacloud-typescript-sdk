// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsResponseBodyDesktopsResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  id?: string;
  /**
   * @remarks
   * The name of the enterprise resource group.
   * 
   * @example
   * Resource group 01
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
      id: 'string',
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


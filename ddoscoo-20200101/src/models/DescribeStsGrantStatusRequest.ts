// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStsGrantStatusRequest extends $dara.Model {
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
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


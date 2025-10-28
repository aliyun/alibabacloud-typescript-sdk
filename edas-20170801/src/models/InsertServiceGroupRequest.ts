// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertServiceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the service group that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * edas-test-group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


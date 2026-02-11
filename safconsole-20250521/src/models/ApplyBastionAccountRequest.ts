// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyBastionAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Mobile Phone Number
   * 
   * @example
   * ***
   */
  mobile?: number;
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * 90912
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


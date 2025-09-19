// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * This parameter is required.
   * 
   * @example
   * 2363
   */
  authId?: number;
  /**
   * @remarks
   * The modules that are associated with the AccessKey pair.
   */
  authModules?: string[];
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      authModules: 'AuthModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      authModules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.authModules)) {
      $dara.Model.validateArray(this.authModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


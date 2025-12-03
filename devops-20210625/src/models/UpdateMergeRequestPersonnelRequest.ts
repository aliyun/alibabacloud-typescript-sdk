// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMergeRequestPersonnelRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  newUserIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      newUserIdList: 'newUserIdList',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      newUserIdList: { 'type': 'array', 'itemType': 'string' },
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.newUserIdList)) {
      $dara.Model.validateArray(this.newUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


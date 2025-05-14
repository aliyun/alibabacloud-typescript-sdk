// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceMembersResponseBody extends $dara.Model {
  notInOrgList?: string[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notInOrgList: 'NotInOrgList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notInOrgList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notInOrgList)) {
      $dara.Model.validateArray(this.notInOrgList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


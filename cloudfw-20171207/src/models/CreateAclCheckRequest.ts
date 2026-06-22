// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL check type.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  aclType?: string;
  /**
   * @remarks
   * The list of ACL check names.
   */
  checkNames?: string[];
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      checkNames: 'CheckNames',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      checkNames: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkNames)) {
      $dara.Model.validateArray(this.checkNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


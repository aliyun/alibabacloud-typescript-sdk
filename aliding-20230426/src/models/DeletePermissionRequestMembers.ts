// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePermissionRequestMembers extends $dara.Model {
  /**
   * @example
   * 123456
   */
  corpId?: string;
  /**
   * @example
   * ORG
   */
  id?: string;
  /**
   * @example
   * ORG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


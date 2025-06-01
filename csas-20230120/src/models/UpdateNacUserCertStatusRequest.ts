// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateNacUserCertStatusRequestIdList } from "./UpdateNacUserCertStatusRequestIdList";


export class UpdateNacUserCertStatusRequest extends $dara.Model {
  idList?: UpdateNacUserCertStatusRequestIdList[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': UpdateNacUserCertStatusRequestIdList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


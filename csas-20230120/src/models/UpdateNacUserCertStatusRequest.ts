// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacUserCertStatusRequestIdList extends $dara.Model {
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of end user IDs and device IDs.
   */
  idList?: UpdateNacUserCertStatusRequestIdList[];
  /**
   * @remarks
   * The certificate status for the end user device. Valid values:
   * 
   * - **Enabled**
   * 
   * - **Disabled**
   * 
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


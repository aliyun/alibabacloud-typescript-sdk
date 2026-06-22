// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFileProtectBindMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The list of servers for which the alert protection level is enabled.
   */
  alertUuids?: string[];
  /**
   * @remarks
   * The list of servers for which tamper-proofing is enabled.
   */
  blockUuids?: string[];
  /**
   * @remarks
   * The list of servers for which file protection is disabled.
   */
  noneUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      alertUuids: 'AlertUuids',
      blockUuids: 'BlockUuids',
      noneUuids: 'NoneUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuids: { 'type': 'array', 'itemType': 'string' },
      blockUuids: { 'type': 'array', 'itemType': 'string' },
      noneUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertUuids)) {
      $dara.Model.validateArray(this.alertUuids);
    }
    if(Array.isArray(this.blockUuids)) {
      $dara.Model.validateArray(this.blockUuids);
    }
    if(Array.isArray(this.noneUuids)) {
      $dara.Model.validateArray(this.noneUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceNotificationRequestBodySendTarget extends $dara.Model {
  /**
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @example
   * DEVICE_OPEN_ID
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


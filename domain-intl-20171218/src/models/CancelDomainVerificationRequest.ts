// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDomainVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseProduceAuthorizationRequest extends $dara.Model {
  /**
   * @example
   * 1219541161213000
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P20211117141528000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.beian_assist
   */
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserId: 'AuthorizedUserId',
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserId: 'string',
      bizId: 'string',
      bizType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


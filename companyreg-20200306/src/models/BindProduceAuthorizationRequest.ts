// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindProduceAuthorizationRequest extends $dara.Model {
  /**
   * @example
   * 1219541161213057,1219541161213059
   */
  authorizedUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P20210815211849000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.bookkeeping_ai
   */
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserIds: 'AuthorizedUserIds',
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserIds: 'string',
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


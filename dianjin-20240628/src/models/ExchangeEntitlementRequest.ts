// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExchangeEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  externalUserId?: string;
  /**
   * @example
   * sbyusgdfjsg
   */
  keyHash?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * req_20240101_001
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * zhangsan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'externalUserId',
      keyHash: 'keyHash',
      requestId: 'requestId',
      templateId: 'templateId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      keyHash: 'string',
      requestId: 'string',
      templateId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


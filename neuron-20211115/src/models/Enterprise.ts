// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Enterprise extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * 互联网企业
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  /**
   * @example
   * linkedmall
   */
  identification?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 阿里
   */
  name?: string;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 内部
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      description: 'description',
      id: 'id',
      identification: 'identification',
      name: 'name',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      description: 'string',
      id: 'number',
      identification: 'string',
      name: 'string',
      requestId: 'string',
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


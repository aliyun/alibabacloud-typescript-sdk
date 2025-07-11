// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://192.168.1.10:9999/
   */
  address?: string;
  /**
   * @example
   * 192.168.1.10
   */
  ip?: string;
  /**
   * @example
   * true
   */
  isDesignated?: boolean;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * 9999
   */
  port?: number;
  /**
   * @example
   * 2.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ip: 'Ip',
      isDesignated: 'IsDesignated',
      label: 'Label',
      online: 'Online',
      port: 'Port',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ip: 'string',
      isDesignated: 'boolean',
      label: 'string',
      online: 'boolean',
      port: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListExecutorsResponseBodyData[];
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListExecutorsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


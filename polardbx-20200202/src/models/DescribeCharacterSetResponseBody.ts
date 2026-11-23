// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCharacterSetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The character sets supported by the instance. Valid values:
   * 
   * - utf8mb4
   * - gbk
   * - latin1
   * - utf8
   */
  characterSet?: string[];
  /**
   * @remarks
   * The storage type of the database on the target instance. Only polarx is supported.
   * 
   * @example
   * polarx
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      characterSet: 'CharacterSet',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSet: { 'type': 'array', 'itemType': 'string' },
      engine: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.characterSet)) {
      $dara.Model.validateArray(this.characterSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: DescribeCharacterSetResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request is successful, success is returned. If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 709C1E40-092D-4A3D-9958-6D7438******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCharacterSetResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


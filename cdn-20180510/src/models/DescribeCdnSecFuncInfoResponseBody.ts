// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSecFuncInfoResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  label?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSecFuncInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Queried data.
   */
  content?: DescribeCdnSecFuncInfoResponseBodyContent[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCD7D917-76F1-442F-BB75-C810DE34C761
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP request response code.
   * 
   * *   0: OK.
   * *   Values other than 0: an error.
   * 
   * @example
   * 0
   */
  retCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      httpStatus: 'HttpStatus',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeCdnSecFuncInfoResponseBodyContent },
      description: 'string',
      httpStatus: 'string',
      requestId: 'string',
      retCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


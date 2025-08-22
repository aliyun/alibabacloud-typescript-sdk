// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSecFuncInfoResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The language (Chinese or English).
   * 
   * @example
   * ai_defense
   */
  label?: string;
  /**
   * @remarks
   * The options in the drop-down list.
   * 
   * @example
   * ai_defense
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

export class DescribeDcdnSecFuncInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameters required by the code.
   */
  content?: DescribeDcdnSecFuncInfoResponseBodyContent[];
  /**
   * @remarks
   * The description of HTTP responses.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30A3A25A-86B3-4C1D-BAA8-12B8607A5CFD
   */
  requestId?: string;
  /**
   * @remarks
   * The return value for HTTP requests. Valid values:
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
      content: { 'type': 'array', 'itemType': DescribeDcdnSecFuncInfoResponseBodyContent },
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


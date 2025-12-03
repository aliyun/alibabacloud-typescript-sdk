// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomFieldOptionResponseBodyFileds extends $dara.Model {
  /**
   * @example
   * 223
   */
  displayValue?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  fieldIdentifier?: string;
  /**
   * @example
   * 3345
   */
  identifier?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * 223
   */
  value?: string;
  /**
   * @example
   * 223
   */
  valueEn?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'displayValue',
      fieldIdentifier: 'fieldIdentifier',
      identifier: 'identifier',
      level: 'level',
      position: 'position',
      value: 'value',
      valueEn: 'valueEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      fieldIdentifier: 'string',
      identifier: 'string',
      level: 'number',
      position: 'number',
      value: 'string',
      valueEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldOptionResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  fileds?: GetCustomFieldOptionResponseBodyFileds[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      fileds: 'fileds',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      fileds: { 'type': 'array', 'itemType': GetCustomFieldOptionResponseBodyFileds },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fileds)) {
      $dara.Model.validateArray(this.fileds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


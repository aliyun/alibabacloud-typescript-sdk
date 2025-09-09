// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckExpandStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether scale-out operations can be performed on the database.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      isActive: 'IsActive',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'boolean',
      msg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the verification.
   */
  data?: CheckExpandStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CDBA7D5-8D62-4D24-9C65-510D62******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckExpandStatusResponseBodyData,
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


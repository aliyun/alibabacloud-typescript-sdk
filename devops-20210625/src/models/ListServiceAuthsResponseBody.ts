// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceAuthsResponseBodyServiceAuths extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 123456789
   */
  ownerStaffId?: string;
  /**
   * @example
   * Codeup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      ownerName: 'ownerName',
      ownerStaffId: 'ownerStaffId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ownerName: 'string',
      ownerStaffId: 'string',
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

export class ListServiceAuthsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  serviceAuths?: ListServiceAuthsResponseBodyServiceAuths[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      serviceAuths: 'serviceAuths',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      serviceAuths: { 'type': 'array', 'itemType': ListServiceAuthsResponseBodyServiceAuths },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.serviceAuths)) {
      $dara.Model.validateArray(this.serviceAuths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


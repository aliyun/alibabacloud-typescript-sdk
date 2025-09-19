// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaClusterBaseLineListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline.
   * 
   * @example
   * Make sure there are no duplicate usernames or UIDs
   */
  alias?: string;
  /**
   * @remarks
   * The key of the baseline type.
   * 
   * @example
   * identification
   */
  classKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline check item.
   * 
   * @example
   * duplicate_uid
   */
  itemKey?: string;
  /**
   * @remarks
   * The key of the name for the baseline.
   * 
   * @example
   * identification
   */
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      classKey: 'ClassKey',
      itemKey: 'ItemKey',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      classKey: 'string',
      itemKey: 'string',
      nameKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpaClusterBaseLineListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about baselines.
   */
  data?: GetOpaClusterBaseLineListResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2F2A020-1CAB-5F52-8CAF-B2ACDDFAC247
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
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
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOpaClusterBaseLineListResponseBodyData },
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


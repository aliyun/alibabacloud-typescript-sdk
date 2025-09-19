// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaClusterNamespaceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * testNameSpace
   */
  nameSpaceName?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceName: 'NameSpaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpaClusterNamespaceListResponseBody extends $dara.Model {
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The namespaces.
   */
  data?: GetOpaClusterNamespaceListResponseBodyData[];
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
   * 384BFAF1-FC41-58DD-97DD-9D361ADF377D
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
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': GetOpaClusterNamespaceListResponseBodyData },
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


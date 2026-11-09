// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList extends $dara.Model {
  /**
   * @remarks
   * Client list.
   */
  clientIdList?: string[];
  /**
   * @remarks
   * Indicates whether there is a token (Token) for the next query. Values:
   * 
   * - For the first query and when there is no next query, this field does not need to be filled.
   * 
   * - If there is a next query, the value should be the NextToken returned from the previous API call.
   * 
   * @example
   * 634dxxxxx75b5f
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the information list.
   */
  deviceCredentialClientIdList?: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredentialClientIdList: 'DeviceCredentialClientIdList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredentialClientIdList: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredentialClientIdList && typeof (this.deviceCredentialClientIdList as any).validate === 'function') {
      (this.deviceCredentialClientIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


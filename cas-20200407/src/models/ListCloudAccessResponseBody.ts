// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccessResponseBodyCloudAccessList extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary key.
   * 
   * @example
   * 888
   */
  accessId?: number;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * @example
   * AAAqdwPBA****
   */
  secretId?: string;
  /**
   * @remarks
   * The service status. The value normal indicates that the service runs as expected.
   * 
   * @example
   * normal
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      cloudName: 'CloudName',
      secretId: 'SecretId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'number',
      cloudName: 'string',
      secretId: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results.
   */
  cloudAccessList?: ListCloudAccessResponseBodyCloudAccessList[];
  /**
   * @remarks
   * The default value is the current page. If CurrentPage is not specified, this parameter is not returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3F1FA43-1C26-50A2-8F0F-7A03851DBB46
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. If ShowSize is not specified, this parameter is not returned.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccessList: 'CloudAccessList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccessList: { 'type': 'array', 'itemType': ListCloudAccessResponseBodyCloudAccessList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAccessList)) {
      $dara.Model.validateArray(this.cloudAccessList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


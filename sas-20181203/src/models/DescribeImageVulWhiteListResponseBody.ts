// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulWhiteListResponseBodyImageVulWhitelist extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability that is specified in Common Vulnerabilities and Exposures (CVE).
   * 
   * @example
   * CVE-2019-19906:in_sasl_add_string
   */
  aliasName?: string;
  /**
   * @remarks
   * The primary key ID of the vulnerability.
   * 
   * @example
   * 34032043
   */
  id?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * scan:AVD-2022-953356
   */
  name?: string;
  /**
   * @remarks
   * The reason why the vulnerability is added to the whitelist.
   * 
   * @example
   * already config in another way
   */
  reason?: string;
  /**
   * @remarks
   * The object on which the query is performed. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: the object type. The value is fixed to repo.
   * *   **target**: the object content. The value is in the Namespace/Image repository format.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"sas_test/script_0209\\",\\"sas_test/script\\"]}
   */
  target?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: system vulnerability
   * *   **sca**: application vulnerability
   * 
   * @example
   * sca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      id: 'number',
      name: 'string',
      reason: 'string',
      target: 'string',
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

export class DescribeImageVulWhiteListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. A value of **200** indicates that the request was successful. Other values indicate that the request failed. You can identify the cause of the failure based on the value of this parameter.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The information about the whitelist of image vulnerabilities.
   */
  imageVulWhitelist?: DescribeImageVulWhiteListResponseBodyImageVulWhitelist[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageVulWhiteListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 911025D0-3D1E-5213-A18A-37EA0C92****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The amount of time that was consumed to process the request. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      imageVulWhitelist: 'ImageVulWhitelist',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      imageVulWhitelist: { 'type': 'array', 'itemType': DescribeImageVulWhiteListResponseBodyImageVulWhitelist },
      message: 'string',
      pageInfo: DescribeImageVulWhiteListResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      timeCost: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageVulWhitelist)) {
      $dara.Model.validateArray(this.imageVulWhitelist);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


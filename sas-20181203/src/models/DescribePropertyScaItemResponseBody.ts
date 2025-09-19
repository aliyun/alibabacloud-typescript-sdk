// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaItemResponseBodyPageInfo extends $dara.Model {
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
   * The number of entries returned per page.
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
   * 27
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

export class DescribePropertyScaItemResponseBodyPropertyItems extends $dara.Model {
  /**
   * @remarks
   * The type of the middleware, database, or web service. Valid values:
   * 
   * *   **system_service**: system service
   * *   **software_library**: software library
   * *   **docker_component**: container component
   * *   **database**: database
   * *   **web_container**: web container
   * *   **jar**: JAR package
   * *   **web_framework**: web framework
   * 
   * @example
   * docker_component
   */
  bizType?: string;
  /**
   * @remarks
   * The number of servers on which the middleware is run.
   * 
   * @example
   * 23
   */
  count?: number;
  /**
   * @remarks
   * The name of the middleware.
   * 
   * @example
   * kubelet
   */
  name?: string;
  /**
   * @remarks
   * The display name of the middleware type.
   * 
   * @example
   * Docker Component
   */
  typeDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      count: 'Count',
      name: 'Name',
      typeDisplay: 'TypeDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      count: 'number',
      name: 'string',
      typeDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyScaItemResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the information about middleware fingerprints.
   */
  propertyItems?: DescribePropertyScaItemResponseBodyPropertyItems[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3F4236AB-7070-538D-85EB-98EBFE6C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyScaItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyScaItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertyItems)) {
      $dara.Model.validateArray(this.propertyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


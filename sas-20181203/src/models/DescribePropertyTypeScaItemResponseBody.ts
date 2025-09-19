// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyTypeScaItemResponseBodyPageInfo extends $dara.Model {
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
   * 69
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

export class DescribePropertyTypeScaItemResponseBodyPropertyTypeItems extends $dara.Model {
  /**
   * @remarks
   * The name of the middleware type.
   * 
   * @example
   * Docker Component
   */
  name?: string;
  /**
   * @remarks
   * The type of the middleware. Valid values:
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
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribePropertyTypeScaItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyTypeScaItemResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the middleware types.
   */
  propertyTypeItems?: DescribePropertyTypeScaItemResponseBodyPropertyTypeItems[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B7A839E8-70AE-591D-8D9E-C5419A22****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyTypeItems: 'PropertyTypeItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyTypeScaItemResponseBodyPageInfo,
      propertyTypeItems: { 'type': 'array', 'itemType': DescribePropertyTypeScaItemResponseBodyPropertyTypeItems },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertyTypeItems)) {
      $dara.Model.validateArray(this.propertyTypeItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


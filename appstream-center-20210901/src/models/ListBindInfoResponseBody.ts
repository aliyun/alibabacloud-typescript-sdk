// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindInfoResponseBodyBindInfoModels extends $dara.Model {
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-fq738or6vd854****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-0abxhr6ce35w8****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-83oe276fre4l3****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * Alice
   */
  userId?: string;
  /**
   * @remarks
   * The WUYING user ID.
   * 
   * @example
   * 2ca6f5a93536****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      productType: 'ProductType',
      regionId: 'RegionId',
      userId: 'UserId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      productType: 'string',
      regionId: 'string',
      userId: 'string',
      wyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of binding information returned.
   */
  bindInfoModels?: ListBindInfoResponseBodyBindInfoModels[];
  /**
   * @remarks
   * The page number of the query results currently displayed.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD2D0761-1FE5-549D-B169-D3F8D19C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindInfoModels: 'BindInfoModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInfoModels: { 'type': 'array', 'itemType': ListBindInfoResponseBodyBindInfoModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindInfoModels)) {
      $dara.Model.validateArray(this.bindInfoModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


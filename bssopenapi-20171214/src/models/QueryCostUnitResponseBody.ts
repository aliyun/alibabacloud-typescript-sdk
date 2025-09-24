// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostUnitResponseBodyDataCostUnitDtoList extends $dara.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 2343464
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 23534
   */
  unitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cost centers.
   */
  costUnitDtoList?: QueryCostUnitResponseBodyDataCostUnitDtoList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': QueryCostUnitResponseBodyDataCostUnitDtoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costUnitDtoList)) {
      $dara.Model.validateArray(this.costUnitDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: QueryCostUnitResponseBodyData,
      message: 'string',
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


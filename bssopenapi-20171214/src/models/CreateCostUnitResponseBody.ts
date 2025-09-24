// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostUnitResponseBodyDataCostUnitDtoList extends $dara.Model {
  /**
   * @remarks
   * The user ID of the owner of the cost center.
   * 
   * @example
   * 26387563
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
   * 84327659328
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

export class CreateCostUnitResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of cost center entities.
   */
  costUnitDtoList?: CreateCostUnitResponseBodyDataCostUnitDtoList[];
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': CreateCostUnitResponseBodyDataCostUnitDtoList },
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

export class CreateCostUnitResponseBody extends $dara.Model {
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
  data?: CreateCostUnitResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: CreateCostUnitResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * ha3-code
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the instance
   * 
   * @example
   * Test instance
   */
  description?: string;
  /**
   * @remarks
   * The time when the instance expires
   * 
   * @example
   * 2019-01-06T16:00:00.0
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether an overdue payment is involved
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-0ju2s170b03
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aeky6hthboewpuy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the instance was last updated
   * 
   * @example
   * 2018-12-06T11:17:49.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      description: 'description',
      expiredTime: 'expiredTime',
      inDebt: 'inDebt',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      inDebt: 'boolean',
      instanceId: 'string',
      lockMode: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 90D6B8F5-FE97-4509-9AAB-367836C51818
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: UpdateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateInstanceResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


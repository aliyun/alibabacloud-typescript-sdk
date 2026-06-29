// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * customHttpCert
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  quotaValue?: string;
  /**
   * @remarks
   * The threshold type of the quota. Valid values:
   * 
   * - **value**: enumeration type. The enumeration range of quota values.
   * - **bool**: Boolean type. Indicates whether the quota is available.
   * - **num**: numeric type. The maximum usage of the quota.
   * - **range**: range type. The value range of the quota.
   * - **custom**: custom type. Other types that do not fall into the preceding four threshold types.
   * 
   * @example
   * bool
   */
  quotaValueType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      quotaValueType: 'QuotaValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      quotaValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of plan instance quotas.
   */
  quotas?: ListInstanceQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  /**
   * @remarks
   * The plan instance status. Valid values:
   * 
   * - **online**: The instance is in normal service.
   * - **offline**: The instance has expired but has not exceeded the grace period and is unavailable.
   * - **disable**: The instance has been released.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesQuotaResponseBodyQuotaValues extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * esa-site-blea5hv7m0ow
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 10
   */
  quotaValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaValue: 'QuotaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * siteCount
   */
  quotaName?: string;
  /**
   * @remarks
   * The threshold type of the quota. Valid values:
   * 
   * - **value**: Enumeration type. The enumeration range of quota values.
   * - **bool**: Boolean type. Indicates whether the quota is available.
   * - **num**: Numeric type. The upper limit of the quota usage.
   * - **range**: Range type. The value range of the quota.
   * - **custom**: Custom type. Other types beyond the four threshold types above.
   * 
   * @example
   * bool
   */
  quotaValueType?: string;
  /**
   * @remarks
   * The list of quota values.
   */
  quotaValues?: ListInstancesQuotaResponseBodyQuotaValues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValueType: 'QuotaValueType',
      quotaValues: 'QuotaValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValueType: 'string',
      quotaValues: { 'type': 'array', 'itemType': ListInstancesQuotaResponseBodyQuotaValues },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotaValues)) {
      $dara.Model.validateArray(this.quotaValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


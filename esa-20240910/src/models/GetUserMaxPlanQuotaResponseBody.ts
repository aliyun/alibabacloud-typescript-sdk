// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMaxPlanQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan instance ID. You can obtain this value by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * esa-site-b09z4sk9pbls
   */
  instanceId?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * <props="china">
   * - Free Edition: entranceplan
   * - Basic: basic
   * - Standard: medium
   * - Premium Edition: high
   * 
   * 
   * <props="intl">
   * - Entrance: entranceplan_intl
   * - Pro: basicplan_intl
   * - Premium: vipplan_intl
   * 
   * @example
   * entranceplan
   */
  planName?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 44640
   */
  quotaValue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6599BB6-525D-5CFF-86BC-24068E6FB3EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      planName: 'PlanName',
      quotaValue: 'QuotaValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      planName: 'string',
      quotaValue: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


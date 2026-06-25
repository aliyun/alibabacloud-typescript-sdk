// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters instances by billing method. Valid values:
   * 
   * - PrePaid: subscription.
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * A keyword for the search. You can search by instance ID or IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * Filter by instance ID. For more information, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uots****a
   */
  instanceId?: string;
  /**
   * @remarks
   * Filter by instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Filter by label.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances to return on each page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The zone of the instance.
   * 
   * @example
   * J
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      filter: 'Filter',
      instanceIP: 'InstanceIP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      filter: 'string',
      instanceIP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the machines to filter. Valid values:
   * - PrePaid: Subscription.
   * - PostPaid: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The search keyword. You can search by machine ID or IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the machine.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * Filters the results by instance ID. For information about how to obtain the instance ID, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uots****a
   */
  instanceId?: string;
  /**
   * @remarks
   * Filters the results by instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the machine.
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Filters the results by label.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  label?: { [key: string]: string };
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
   * The page number of the machine instance list in the dedicated resource group. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of machines to return on each page in a paged query. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The zone of the machine.
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
      label: 'Label',
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
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(this.label) {
      $dara.Model.validateMap(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


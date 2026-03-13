// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMachineGroupsRequest extends $dara.Model {
  creatorID?: string;
  ecsSpec?: string;
  name?: string;
  order?: string;
  orderInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  sortBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      ecsSpec: 'EcsSpec',
      name: 'Name',
      order: 'Order',
      orderInstanceId: 'OrderInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      ecsSpec: 'string',
      name: 'string',
      order: 'string',
      orderInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      sortBy: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


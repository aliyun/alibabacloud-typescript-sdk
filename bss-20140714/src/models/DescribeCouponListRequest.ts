// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCouponListRequest extends $dara.Model {
  endDeliveryTime?: string;
  pageNum?: number;
  pageSize?: number;
  startDeliveryTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endDeliveryTime: 'EndDeliveryTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDeliveryTime: 'StartDeliveryTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDeliveryTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startDeliveryTime: 'string',
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


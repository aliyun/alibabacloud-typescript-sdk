// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment extends $dara.Model {
  /**
   * @example
   * alitrip
   */
  departId?: string;
  departName?: string;
  static names(): { [key: string]: string } {
    return {
      departId: 'depart_id',
      departName: 'depart_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departId: 'string',
      departName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


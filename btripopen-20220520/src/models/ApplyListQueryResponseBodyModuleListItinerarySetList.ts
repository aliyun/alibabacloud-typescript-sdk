// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryResponseBodyModuleListItinerarySetList extends $dara.Model {
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  /**
   * @example
   * BJS，HGH
   */
  cityCodeSet?: string;
  citySet?: string;
  costCenterName?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  invoiceName?: string;
  /**
   * @example
   * abcd
   */
  itineraryId?: string;
  /**
   * @example
   * 12345
   */
  projectCode?: string;
  projectTitle?: string;
  thirdpartCostCenterId?: string;
  thirdpartInvoiceId?: string;
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterName: 'cost_center_name',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryResponseBodyModuleListItineraryList extends $dara.Model {
  arrCity?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  costCenterName?: string;
  depCity?: string;
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
   * xm1
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
  /**
   * @example
   * 1
   */
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'string',
      costCenterName: 'string',
      depCity: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


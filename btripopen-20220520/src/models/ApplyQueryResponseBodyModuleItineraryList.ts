// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard } from "./ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard";


export class ApplyQueryResponseBodyModuleItineraryList extends $dara.Model {
  arrCity?: string;
  /**
   * @example
   * 330100
   */
  arrCityCode?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @example
   * accac
   */
  costCenterName?: string;
  depCity?: string;
  /**
   * @example
   * 330100
   */
  depCityCode?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  invoiceName?: string;
  itineraryId?: string;
  itineraryTravelStandard?: ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard;
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
   * 1
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
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      attribute: 'attribute',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
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
      arrCityCode: 'string',
      arrDate: 'string',
      attribute: 'string',
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyQueryResponseBodyModuleItineraryListItineraryTravelStandard,
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
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


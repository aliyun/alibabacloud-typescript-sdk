// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard } from "./ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard";


export class ApplyQueryResponseBodyModuleItinerarySetList extends $dara.Model {
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  attribute?: string;
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
   * 12345
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard;
  /**
   * @example
   * projecttow
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
      attribute: 'attribute',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterName: 'cost_center_name',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      attribute: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyQueryResponseBodyModuleItinerarySetListItineraryTravelStandard,
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
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


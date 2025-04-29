// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyModifyRequestItinerarySetListItineraryTravelStandard } from "./ApplyModifyRequestItinerarySetListItineraryTravelStandard";


export class ApplyModifyRequestItinerarySetList extends $dara.Model {
  /**
   * @example
   * 2017-01-01 00:00:00
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @example
   * BJS,SHA
   */
  cityCodeSet?: string;
  citySet?: string;
  /**
   * @example
   * 123455
   */
  costCenterId?: number;
  /**
   * @example
   * 2017-01-01 00:00:00
   */
  depDate?: string;
  /**
   * @example
   * 12344
   */
  invoiceId?: number;
  /**
   * @example
   * 20220722001
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyModifyRequestItinerarySetListItineraryTravelStandard;
  /**
   * @example
   * projecttow
   */
  projectCode?: string;
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  /**
   * @example
   * thridpart12138
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * thridpart12138
   */
  thirdpartCostCenterId?: string;
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
      costCenterId: 'cost_center_id',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      provinceTravelCityAdcodes: 'province_travel_city_adcodes',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      attribute: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterId: 'number',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyModifyRequestItinerarySetListItineraryTravelStandard,
      projectCode: 'string',
      projectTitle: 'string',
      provinceTravelCityAdcodes: { 'type': 'array', 'itemType': 'string' },
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
    };
  }

  validate() {
    if(this.itineraryTravelStandard && typeof (this.itineraryTravelStandard as any).validate === 'function') {
      (this.itineraryTravelStandard as any).validate();
    }
    if(Array.isArray(this.provinceTravelCityAdcodes)) {
      $dara.Model.validateArray(this.provinceTravelCityAdcodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


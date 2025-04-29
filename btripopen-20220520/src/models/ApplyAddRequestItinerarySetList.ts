// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyAddRequestItinerarySetListItineraryTravelStandard } from "./ApplyAddRequestItinerarySetListItineraryTravelStandard";


export class ApplyAddRequestItinerarySetList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS,HGH
   */
  cityCodeSet?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  citySet?: string;
  /**
   * @example
   * 12345
   */
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-01-01 00:00:00
   */
  depDate?: string;
  /**
   * @example
   * 12345
   */
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItinerarySetListItineraryTravelStandard;
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
   * @remarks
   * This parameter is required.
   * 
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
      itineraryTravelStandard: ApplyAddRequestItinerarySetListItineraryTravelStandard,
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


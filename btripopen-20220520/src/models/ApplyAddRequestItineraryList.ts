// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyAddRequestItineraryListItineraryTravelStandard } from "./ApplyAddRequestItineraryListItineraryTravelStandard";


export class ApplyAddRequestItineraryList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrCity?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrDate?: string;
  attribute?: string;
  /**
   * @example
   * 12138
   */
  costCenterId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  depCity?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
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
   * 34711
   */
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  itineraryId?: string;
  itineraryTravelStandard?: ApplyAddRequestItineraryListItineraryTravelStandard;
  /**
   * @example
   * true
   */
  needHotel?: boolean;
  /**
   * @example
   * true
   */
  needTraffic?: boolean;
  /**
   * @example
   * projecttow
   */
  projectCode?: string;
  projectTitle?: string;
  provinceTravelCityAdcodes?: string[];
  /**
   * @example
   * thirdpart34711
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      itineraryId: 'itinerary_id',
      itineraryTravelStandard: 'itinerary_travel_standard',
      needHotel: 'need_hotel',
      needTraffic: 'need_traffic',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      provinceTravelCityAdcodes: 'province_travel_city_adcodes',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
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
      costCenterId: 'number',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      itineraryId: 'string',
      itineraryTravelStandard: ApplyAddRequestItineraryListItineraryTravelStandard,
      needHotel: 'boolean',
      needTraffic: 'boolean',
      projectCode: 'string',
      projectTitle: 'string',
      provinceTravelCityAdcodes: { 'type': 'array', 'itemType': 'string' },
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      trafficType: 'number',
      tripWay: 'number',
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


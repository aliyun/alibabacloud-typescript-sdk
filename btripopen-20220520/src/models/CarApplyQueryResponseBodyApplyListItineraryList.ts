// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyQueryResponseBodyApplyListItineraryList extends $dara.Model {
  arrCity?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  arrDate?: string;
  /**
   * @example
   * 1
   */
  costCenterId?: number;
  costCenterName?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  depDate?: string;
  /**
   * @example
   * 1
   */
  invoiceId?: number;
  invoiceName?: string;
  /**
   * @example
   * 1
   */
  itineraryId?: string;
  /**
   * @example
   * xm1
   */
  projectCode?: string;
  projectTitle?: string;
  /**
   * @example
   * 4
   */
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
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


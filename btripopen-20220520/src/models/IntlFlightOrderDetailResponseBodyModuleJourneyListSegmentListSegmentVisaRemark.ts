// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListSegmentVisaRemark extends $dara.Model {
  depCityVisaRemark?: string;
  /**
   * @example
   * 0
   */
  depCityVisaType?: number;
  stopCityVisaRemarks?: string[];
  stopCityVisaTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      depCityVisaRemark: 'dep_city_visa_remark',
      depCityVisaType: 'dep_city_visa_type',
      stopCityVisaRemarks: 'stop_city_visa_remarks',
      stopCityVisaTypes: 'stop_city_visa_types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityVisaRemark: 'string',
      depCityVisaType: 'number',
      stopCityVisaRemarks: { 'type': 'array', 'itemType': 'string' },
      stopCityVisaTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCityVisaRemarks)) {
      $dara.Model.validateArray(this.stopCityVisaRemarks);
    }
    if(Array.isArray(this.stopCityVisaTypes)) {
      $dara.Model.validateArray(this.stopCityVisaTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


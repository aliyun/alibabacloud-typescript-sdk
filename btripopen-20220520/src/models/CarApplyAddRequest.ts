// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyAddRequestTravelerStandardCarCitySet extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddRequestTravelerStandard extends $dara.Model {
  carCitySet?: CarApplyAddRequestTravelerStandardCarCitySet[];
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      carCitySet: 'car_city_set',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carCitySet: { 'type': 'array', 'itemType': CarApplyAddRequestTravelerStandardCarCitySet },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.carCitySet)) {
      $dara.Model.validateArray(this.carCitySet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyAddRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cause?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  city?: string;
  cityCodeSet?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-07-12 14:52:52
   */
  date?: string;
  /**
   * @example
   * 2022-07-12 18:51:25
   */
  finishedDate?: string;
  /**
   * @example
   * project1413
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IRGS1413
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * QA1411
   */
  thirdPartCostCenterId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartInvoiceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timesTotal?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timesType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timesUsed?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  travelerStandard?: CarApplyAddRequestTravelerStandard[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN1415614
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'cause',
      city: 'city',
      cityCodeSet: 'city_code_set',
      date: 'date',
      finishedDate: 'finished_date',
      projectCode: 'project_code',
      projectName: 'project_name',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      timesTotal: 'times_total',
      timesType: 'times_type',
      timesUsed: 'times_used',
      title: 'title',
      travelerStandard: 'traveler_standard',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      city: 'string',
      cityCodeSet: 'string',
      date: 'string',
      finishedDate: 'string',
      projectCode: 'string',
      projectName: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartInvoiceId: 'string',
      timesTotal: 'number',
      timesType: 'number',
      timesUsed: 'number',
      title: 'string',
      travelerStandard: { 'type': 'array', 'itemType': CarApplyAddRequestTravelerStandard },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.travelerStandard)) {
      $dara.Model.validateArray(this.travelerStandard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


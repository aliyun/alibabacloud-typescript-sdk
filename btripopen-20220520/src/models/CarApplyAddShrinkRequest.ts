// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyAddShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The reason for the business trip.
   * 
   * This parameter is required.
   * 
   * @example
   * 访问客户
   */
  cause?: string;
  /**
   * @remarks
   * The cities for car service. Separate multiple cities with Chinese commas (，).
   * Note: A maximum of 10 cities can be specified. The values in city and city_code_set must correspond one-to-one.
   * 
   * @example
   * 北京，杭州
   */
  city?: string;
  /**
   * @remarks
   * The city code set for intra-city car service. Separate multiple cities with Chinese commas (，).
   * Note: 1) Either city_code_set or city is required. If both are specified, city_code_set takes precedence.
   * A maximum of 10 cities can be specified.
   * 
   * @example
   * 110100，330100
   */
  cityCodeSet?: string;
  /**
   * @remarks
   * The car service time. This parameter is controlled on a daily basis. For example, a value of 2021-03-18 20:26:56 indicates that the car service is available on 2021-03-18. For multi-day scenarios, use this parameter together with the finished_date parameter. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-07-12 14:52:52
   */
  date?: string;
  /**
   * @remarks
   * The car service end time. This parameter is controlled on a daily basis. For example, if date is set to 2021-03-18 20:26:56 and finished_date is set to 2021-03-30 20:26:56, the car service is available from 2021-03-18 (inclusive) to 2021-03-30 (inclusive). If this parameter is not specified, the value of date is used as the end time. The time must be in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-07-12 18:51:25
   */
  finishedDate?: string;
  itineraryListShrink?: string;
  /**
   * @remarks
   * The project code associated with the approval form.
   * 
   * @example
   * project1413
   */
  projectCode?: string;
  /**
   * @remarks
   * The project name associated with the approval form.
   * 
   * @example
   * 项目1
   */
  projectName?: string;
  /**
   * @remarks
   * The approval status.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the third-party approval form.
   * 
   * This parameter is required.
   * 
   * @example
   * IRGS1413
   */
  thirdPartApplyId?: string;
  /**
   * @remarks
   * The ID of the third-party cost center associated with the approval form.
   * >Warning: This field is required. To make it optional, contact the operations team.
   * 
   * @example
   * QA1411
   */
  thirdPartCostCenterId?: string;
  /**
   * @remarks
   * The ID of the third-party invoice header associated with the approval form.
   * 
   * >Warning: This field is required. To make it optional, contact the operations team.
   * 
   * @example
   * GA15131
   */
  thirdPartInvoiceId?: string;
  /**
   * @remarks
   * The total number of times the approval form can be used.
   * 
   * @example
   * 1
   */
  timesTotal?: number;
  /**
   * @remarks
   * The type of available usage count for the approval form. If the enterprise does not need to limit the number of times the approval form can be used, set this parameter to 1 (unlimited) and set both times_total and times_used to 0. Valid values:
   * 
   * - 1: unlimited.
   * - 2: user-specified count.
   * 
   * @example
   * 1
   */
  timesType?: number;
  /**
   * @remarks
   * The number of times the approval form has been used.
   * 
   * @example
   * 1
   */
  timesUsed?: number;
  /**
   * @remarks
   * The title of the approval form.
   * 
   * This parameter is required.
   * 
   * @example
   * 访问客户
   */
  title?: string;
  /**
   * @remarks
   * The intra-city car service rules.
   */
  travelerStandardShrink?: string;
  /**
   * @remarks
   * The third-party employee ID of the user who initiates the approval.
   * 
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
      itineraryListShrink: 'itinerary_list',
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
      travelerStandardShrink: 'traveler_standard',
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
      itineraryListShrink: 'string',
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
      travelerStandardShrink: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


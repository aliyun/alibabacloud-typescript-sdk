// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the traffic control target.
   * 
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @remarks
   * The event for the traffic control target.
   * 
   * @example
   * click
   */
  event?: string;
  /**
   * @remarks
   * The item condition in array format.
   * 
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition in expression format.
   * 
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @remarks
   * The item condition type.
   * 
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @remarks
   * The traffic control target name.
   * 
   * @example
   * target-1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the control rule applies to a new product.
   * 
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @remarks
   * The recall strategy name.
   * 
   * @example
   * recall-1
   */
  recallName?: string;
  /**
   * @remarks
   * The start time of the traffic control target.
   * 
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @remarks
   * The statistics period.
   * 
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @remarks
   * The traffic control target status.
   * 
   * @example
   * Opened
   */
  status?: string;
  /**
   * @remarks
   * The tolerance range for the traffic control target.
   * 
   * @example
   * 10
   */
  toleranceValue?: number;
  /**
   * @remarks
   * The traffic control target value.
   * 
   * @example
   * 30
   */
  value?: number;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * null
   */
  newParam3?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      event: 'Event',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpress: 'ItemConditionExpress',
      itemConditionType: 'ItemConditionType',
      name: 'Name',
      newProductRegulation: 'NewProductRegulation',
      recallName: 'RecallName',
      startTime: 'StartTime',
      statisPeriod: 'StatisPeriod',
      status: 'Status',
      toleranceValue: 'ToleranceValue',
      value: 'Value',
      newParam3: 'new-param-3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      event: 'string',
      itemConditionArray: 'string',
      itemConditionExpress: 'string',
      itemConditionType: 'string',
      name: 'string',
      newProductRegulation: 'boolean',
      recallName: 'string',
      startTime: 'string',
      statisPeriod: 'string',
      status: 'string',
      toleranceValue: 'number',
      value: 'number',
      newParam3: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


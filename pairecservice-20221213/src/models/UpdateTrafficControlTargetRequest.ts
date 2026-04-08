// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTargetRequest extends $dara.Model {
  /**
   * @example
   * 2024-04-25
   */
  endTime?: string;
  /**
   * @example
   * click
   */
  event?: string;
  /**
   * @example
   * [{"field":"status","option":"=","value":"1"}]
   */
  itemConditionArray?: string;
  /**
   * @example
   * status=1
   */
  itemConditionExpress?: string;
  /**
   * @example
   * Array
   */
  itemConditionType?: string;
  /**
   * @example
   * target-1
   */
  name?: string;
  /**
   * @example
   * false
   */
  newProductRegulation?: boolean;
  /**
   * @example
   * recall-1
   */
  recallName?: string;
  /**
   * @example
   * 2024-03-25
   */
  startTime?: string;
  /**
   * @example
   * Daily
   */
  statisPeriod?: string;
  /**
   * @example
   * Opened
   */
  status?: string;
  toleranceValue?: number;
  /**
   * @example
   * 30
   */
  value?: number;
  /**
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


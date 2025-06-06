// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficControlTargetRequest extends $dara.Model {
  endTime?: string;
  event?: string;
  itemConditionArray?: string;
  itemConditionExpress?: string;
  itemConditionType?: string;
  name?: string;
  newProductRegulation?: boolean;
  recallName?: string;
  startTime?: string;
  statisPeriod?: string;
  status?: string;
  toleranceValue?: number;
  value?: number;
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


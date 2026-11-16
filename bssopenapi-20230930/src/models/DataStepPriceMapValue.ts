// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataStepPriceMapValue extends $dara.Model {
  currency?: string;
  deductCycleType?: string;
  leftClose?: boolean;
  max?: string;
  min?: string;
  priceValue?: string;
  priceValueType?: string;
  rightClose?: boolean;
  stepPriceValue?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deductCycleType: 'DeductCycleType',
      leftClose: 'LeftClose',
      max: 'Max',
      min: 'Min',
      priceValue: 'PriceValue',
      priceValueType: 'PriceValueType',
      rightClose: 'RightClose',
      stepPriceValue: 'StepPriceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deductCycleType: 'string',
      leftClose: 'boolean',
      max: 'string',
      min: 'string',
      priceValue: 'string',
      priceValueType: 'string',
      rightClose: 'boolean',
      stepPriceValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


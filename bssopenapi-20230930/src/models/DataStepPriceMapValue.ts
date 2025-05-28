// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataStepPriceMapValue extends $dara.Model {
  rightClose?: boolean;
  min?: string;
  max?: string;
  currency?: string;
  leftClose?: boolean;
  stepPriceValue?: string;
  priceValueType?: string;
  priceValue?: string;
  deductCycleType?: string;
  static names(): { [key: string]: string } {
    return {
      rightClose: 'RightClose',
      min: 'Min',
      max: 'Max',
      currency: 'Currency',
      leftClose: 'LeftClose',
      stepPriceValue: 'StepPriceValue',
      priceValueType: 'PriceValueType',
      priceValue: 'PriceValue',
      deductCycleType: 'DeductCycleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightClose: 'boolean',
      min: 'string',
      max: 'string',
      currency: 'string',
      leftClose: 'boolean',
      stepPriceValue: 'string',
      priceValueType: 'string',
      priceValue: 'string',
      deductCycleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppRequestLimiterInfoLimiters extends $dara.Model {
  maxValue?: number;
  minValue?: number;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


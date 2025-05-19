// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCalculationJobsResponseBody extends $dara.Model {
  calculationJobIds?: string[];
  /**
   * @example
   * 8C27790E-CCA5-56BB-BA17-646295DEC0A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      calculationJobIds: 'CalculationJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculationJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.calculationJobIds)) {
      $dara.Model.validateArray(this.calculationJobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


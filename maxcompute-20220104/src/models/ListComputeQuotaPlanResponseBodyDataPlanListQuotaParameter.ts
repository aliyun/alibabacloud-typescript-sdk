// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter extends $dara.Model {
  elasticReservedCU?: number;
  maxCU?: number;
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


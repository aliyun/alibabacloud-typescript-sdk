// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaResponseBodySubQuotaInfoListParameter extends $dara.Model {
  elasticReservedCU?: number;
  enablePriority?: boolean;
  forceReservedMin?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  maxCU?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minCU?: number;
  schedulerType?: string;
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


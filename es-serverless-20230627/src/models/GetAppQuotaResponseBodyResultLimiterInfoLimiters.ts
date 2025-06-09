// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppQuotaResponseBodyResultLimiterInfoLimiters extends $dara.Model {
  /**
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @example
   * INDEX_NUMBER_OF_SHARDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The number of tainted groups.
   * 
   * @example
   * 10
   */
  communityCount?: number;
  /**
   * @remarks
   * The number of failed data samples.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The recall probability.
   * 
   * @example
   * 2.5%
   */
  recallProbability?: string;
  /**
   * @remarks
   * The risk density.
   * 
   * @example
   * 1.5%
   */
  riskDensity?: string;
  /**
   * @remarks
   * The number of data samples.
   * 
   * @example
   * 100
   */
  sampleCount?: number;
  /**
   * @remarks
   * The number of successful data samples.
   * 
   * @example
   * 99
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      communityCount: 'communityCount',
      failCount: 'failCount',
      recallProbability: 'recallProbability',
      riskDensity: 'riskDensity',
      sampleCount: 'sampleCount',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communityCount: 'number',
      failCount: 'number',
      recallProbability: 'string',
      riskDensity: 'string',
      sampleCount: 'number',
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: CreateSampleResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: CreateSampleResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


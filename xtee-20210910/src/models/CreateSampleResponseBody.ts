// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of colored groups
   * 
   * @example
   * 10
   */
  communityCount?: number;
  /**
   * @remarks
   * Number of failed samples
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * Recall probability
   * 
   * @example
   * 2.5%
   */
  recallProbability?: string;
  /**
   * @remarks
   * Risk density
   * 
   * @example
   * 1.5%
   */
  riskDensity?: string;
  /**
   * @remarks
   * Number of samples
   * 
   * @example
   * 100
   */
  sampleCount?: number;
  /**
   * @remarks
   * Number of successful samples
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
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
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


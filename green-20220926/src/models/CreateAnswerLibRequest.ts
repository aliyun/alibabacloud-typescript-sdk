// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnswerLibRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the fallback answer library.
   * 
   * @example
   * Test fallback answer library
   */
  libName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * oss-cip-shanghai
   */
  sampleBucket?: string;
  /**
   * @remarks
   * The name of the file that contains the fallback answer samples to be added.
   * 
   * @example
   * data/xxx.xlsx
   */
  sampleObject?: string;
  /**
   * @remarks
   * The samples to be added.
   * 
   * @example
   * Fallback answer 1\\nFallback answer 2
   */
  samples?: string;
  static names(): { [key: string]: string } {
    return {
      libName: 'LibName',
      regionId: 'RegionId',
      sampleBucket: 'SampleBucket',
      sampleObject: 'SampleObject',
      samples: 'Samples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libName: 'string',
      regionId: 'string',
      sampleBucket: 'string',
      sampleObject: 'string',
      samples: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


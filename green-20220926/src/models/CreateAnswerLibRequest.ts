// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnswerLibRequest extends $dara.Model {
  libName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * oss-cip-shanghai
   */
  sampleBucket?: string;
  /**
   * @example
   * data/xxx.xlsx
   */
  sampleObject?: string;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnswerLibRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy answer library.
   * 
   * @example
   * 测试代答库
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
   * The name of the storage space.
   * 
   * @example
   * oss-cip-shanghai
   */
  sampleBucket?: string;
  /**
   * @remarks
   * The file name of the proxy answer sample to be added.
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
   * 代答答案1\\n代答答案2
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


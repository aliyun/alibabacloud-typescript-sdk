// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAnswerSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the proxy answer library.
   * 
   * @example
   * alxxxx
   */
  libId?: string;
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
      libId: 'LibId',
      regionId: 'RegionId',
      sampleObject: 'SampleObject',
      samples: 'Samples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * data/xxx.xlsx
   */
  sampleObject?: string;
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


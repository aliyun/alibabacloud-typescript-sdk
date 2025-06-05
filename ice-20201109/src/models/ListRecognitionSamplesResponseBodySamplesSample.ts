// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionSamplesResponseBodySamplesSample extends $dara.Model {
  /**
   * @example
   * https://example.com/sample.png
   */
  imageUrl?: string;
  /**
   * @example
   * xxxxxxxxxxxxx
   */
  sampleId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      sampleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


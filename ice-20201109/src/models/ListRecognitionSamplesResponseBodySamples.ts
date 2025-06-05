// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecognitionSamplesResponseBodySamplesSample } from "./ListRecognitionSamplesResponseBodySamplesSample";


export class ListRecognitionSamplesResponseBodySamples extends $dara.Model {
  sample?: ListRecognitionSamplesResponseBodySamplesSample[];
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: { 'type': 'array', 'itemType': ListRecognitionSamplesResponseBodySamplesSample },
    };
  }

  validate() {
    if(Array.isArray(this.sample)) {
      $dara.Model.validateArray(this.sample);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


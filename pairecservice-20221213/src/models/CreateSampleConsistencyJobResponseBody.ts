// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleConsistencyJobResponseBody extends $dara.Model {
  requestId?: string;
  sampleConsistencyJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sampleConsistencyJobId: 'SampleConsistencyJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sampleConsistencyJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


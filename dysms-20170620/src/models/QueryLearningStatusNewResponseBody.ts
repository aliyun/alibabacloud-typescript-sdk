// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLearningStatusNewResponseBody extends $dara.Model {
  learningStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      learningStatus: 'LearningStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


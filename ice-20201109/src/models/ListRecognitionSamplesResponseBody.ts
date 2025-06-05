// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecognitionSamplesResponseBodySamples } from "./ListRecognitionSamplesResponseBodySamples";


export class ListRecognitionSamplesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  samples?: ListRecognitionSamplesResponseBodySamples;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      samples: 'Samples',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      samples: ListRecognitionSamplesResponseBodySamples,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.samples && typeof (this.samples as any).validate === 'function') {
      (this.samples as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


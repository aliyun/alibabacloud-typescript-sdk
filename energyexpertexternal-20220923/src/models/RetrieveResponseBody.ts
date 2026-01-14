// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChunkItem } from "./ChunkItem";


export class RetrieveResponseBodyData extends $dara.Model {
  /**
   * @example
   * 76cd1691-daf6-4113-8444-4998a25a5323
   */
  jobId?: string;
  results?: ChunkItem[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      results: { 'type': 'array', 'itemType': ChunkItem },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBody extends $dara.Model {
  data?: RetrieveResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RetrieveResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceAbJobRequest extends $dara.Model {
  /**
   * @example
   * 31fa3c9ca8134fb4b0b0f7878301****
   */
  jobId?: string;
  /**
   * @example
   * 3e6149d5a8c944c09b1a8d2dc3e4****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


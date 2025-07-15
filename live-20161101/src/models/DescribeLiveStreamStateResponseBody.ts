// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE6CD79D-0A98-1F22-A15F-FADA74DF2729
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the stream. Valid values:
   * 
   * *   online: The stream is being ingested.
   * *   offline: The stream is offline. This may be caused by failed or completed stream ingest. For the specific reason, check the stream ingest callback. This operation does not provide detailed information.
   * 
   * @example
   * online
   */
  streamState?: string;
  /**
   * @remarks
   * The mode of the stream. Valid values:
   * 
   * *   push: stream ingest
   * *   pull: triggered stream pulling
   * 
   * @example
   * push
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamState: 'StreamState',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamState: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


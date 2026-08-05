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
   * The state of the stream. Valid values:
   * 
   * - online: The stream is active.
   * 
   * - offline: The stream is offline. This may mean the stream ingest has failed or ended. For specific details, use the data returned by the stream ingest callback. This operation does not provide a detailed breakdown of the offline status.
   * 
   * @example
   * online
   */
  streamState?: string;
  /**
   * @remarks
   * The stream ingest method. Valid values:
   * 
   * - push
   * 
   * - pull
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


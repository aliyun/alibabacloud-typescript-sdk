// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLiveInputRequestInputSettings extends $dara.Model {
  flowId?: string;
  flowOutputName?: string;
  /**
   * @remarks
   * The source URL where the stream is pulled from. This parameter is required for PULL inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The name of the pushed stream. This parameter is required for PUSH inputs. It can be up to 255 characters in length.
   * 
   * @example
   * mystream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowOutputName: 'FlowOutputName',
      sourceUrl: 'SourceUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowOutputName: 'string',
      sourceUrl: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


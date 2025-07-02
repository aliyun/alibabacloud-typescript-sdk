// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaLiveInputRequestInputSettings extends $dara.Model {
  /**
   * @remarks
   * The ID of the flow from MediaConnect. This parameter is required when Type is set to MEDIA_CONNECT.
   * 
   * @example
   * ******81-9693-40dc-bbab-db5e49******
   */
  flowId?: string;
  /**
   * @remarks
   * The output name of the MediaConnect flow. This parameter is required when Type is set to MEDIA_CONNECT.
   * 
   * @example
   * myFlowOutputName
   */
  flowOutputName?: string;
  /**
   * @remarks
   * The source URL from which the stream is pulled. This parameter is required for PULL inputs.
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


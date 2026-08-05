// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTrancodeSEIRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream. View AppNames on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The delay in milliseconds before the SEI is inserted after the command is received.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  delay?: number;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies the insertion pattern for the SEI.
   * 
   * - **keyframe**: Inserts at every keyframe.
   * 
   * - **frame**: Inserts at every single frame.
   * 
   * This parameter is required.
   * 
   * @example
   * keyframe
   */
  pattern?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The number of times to repeat the insertion. A value of -1 means infinite repetitions.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  repeat?: number;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * > It must be the name of the source stream. This ensures that SEI is inserted into all transcoded streams.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The SEI text. Length limit: 4000 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * liveSei****
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      delay: 'Delay',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      pattern: 'Pattern',
      regionId: 'RegionId',
      repeat: 'Repeat',
      streamName: 'StreamName',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      delay: 'number',
      domainName: 'string',
      ownerId: 'number',
      pattern: 'string',
      regionId: 'string',
      repeat: 'number',
      streamName: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTrancodeSEIRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The time period after which the SEI is inserted after the request is received. Unit: milliseconds.
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
   * Specifies whether to append the SEI to each keyframe or frame. Valid values:
   * 
   * *   **keyframe**
   * *   **frame**
   * 
   * This parameter is required.
   * 
   * @example
   * keyframe
   */
  pattern?: string;
  regionId?: string;
  /**
   * @remarks
   * The number of times that the SEI is repeatedly inserted. A value of -1 specifies infinite times.
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
   * >  The value of this parameter must be the name of the source stream. This way, the SEI is inserted to all the transcoded streams.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The SEI text. It can be up to 4,000 bytes in length.
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


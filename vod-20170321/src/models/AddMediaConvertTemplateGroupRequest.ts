// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaConvertTemplateGroupRequest extends $dara.Model {
  /**
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @example
   * {"AutoStreamName":"{RunId}_master"}
   */
  groupConfig?: string;
  /**
   * @example
   * mcTemplateGroup
   */
  name?: string;
  /**
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  /**
   * @example
   * [{"Definition":"HD","TemplateName":"hd-720p","Type":"Normal","Video":{"Codec":"H.264","Bitrate":"2000","Width":"1280","Height":"720","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"128","Samplerate":"44100","Channels":"2"},"Container":{"Format":"m3u8"},"MuxConfig":{"Segment":{"Duration":"10"}}}]
   */
  transcodeTemplateList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupConfig: 'GroupConfig',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupConfig: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


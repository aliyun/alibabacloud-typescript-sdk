// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Use the multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * *   The name can be up to 128 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * > You must specify TranscodeTemplateGroupId or Name in the request.
   * 
   * @example
   * transcodetemplate
   */
  name?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. If a transcoding template group ID is specified, you can add transcoding templates to the template group.
   * 
   * > You must specify TranscodeTemplateGroupId or Name in the request.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The configurations of the transcoding template. The value is a string in JSON format. For more information about the data structure, see [TranscodeTemplate](https://help.aliyun.com/document_detail/52839.html).
   * 
   * > *   If you do not specify this parameter, the transcoding job cannot be automatically created after you upload a video.
   * > *   If you do not need to set Width or Height, do not specify the corresponding parameter. You cannot set the value to an empty string, such as "Height":"".
   * 
   * @example
   * [{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30","Height":""},"Definition":"SD","Container":{"Format":"mp4"},"TemplateName":"testName","MuxConfig":{},"Audio":{"Codec":"AAC","Bitrate":"64","Samplerate":"44100"}}]
   */
  transcodeTemplateList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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


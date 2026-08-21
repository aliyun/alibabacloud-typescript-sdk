// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * - The name can be up to 128 bytes in length.
   * - The value is encoded in UTF-8.
   * > You must specify either TranscodeTemplateGroupId or Name.
   * 
   * @example
   * transcodetemplate
   */
  name?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. If you specify the ID of a transcoding template group, new transcoding templates are added to the specified template group.
   * > You must specify either TranscodeTemplateGroupId or Name.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The transcoding template configurations in the JSON format. For more information about the parameter structure, see [TranscodeTemplate](https://help.aliyun.com/document_detail/52839.html).
   * >- If you do not specify this parameter, the transcoding process is not created and video uploads do not trigger transcoding.
   * >- If you do not need to set the Width or Height property, do not specify the corresponding property. Do not set it to an empty string, such as "Height":"".
   * 
   * @example
   * [{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30","Height":360,"Width":640},"Definition":"SD","Container":{"Format":"mp4"},"TemplateName":"testName","MuxConfig":{},"Audio":{"Codec":"AAC","Bitrate":"64","Samplerate":"44100"}}]
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


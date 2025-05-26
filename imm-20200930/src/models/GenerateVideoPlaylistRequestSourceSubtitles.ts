// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistRequestSourceSubtitles extends $dara.Model {
  /**
   * @remarks
   * The subtitle language. If you configure this parameter, the value must comply with the ISO 639-2 standard. By default, this parameter is left empty.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The OSS path of the subtitle file.
   * 
   * The OSS path must be in the oss://${Bucket}/${Object} format. ${Bucket} specifies the name of the OSS bucket that is in the same region as the current project. ${Object} specifies the full path of the file.
   * 
   * >  The **MasterURI** parameter cannot be left empty, and the OSS path `oss://${Bucket}/${Object}` of a subtitle file must be in the directory specified by the **MasterURI** parameter or its subdirectory.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object/subtitle/eng.vtt
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


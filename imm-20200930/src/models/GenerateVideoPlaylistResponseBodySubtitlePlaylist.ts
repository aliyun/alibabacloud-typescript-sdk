// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistResponseBodySubtitlePlaylist extends $dara.Model {
  /**
   * @remarks
   * The serial number of the subtitle stream. The value starts from 0.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The language of the subtitle stream.
   * 
   * >  The language is derived from the subtitle stream information in the OSS path specified by the SourceURI parameter for a source video. If no language information exists in the source video, null is returned.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The token of the subtitle media playlist. You can use this parameter to generate the path of a subtitle file.
   * 
   * >  You can generate the path of a transcoded subtitle file based on the returned token value. The path must be in the oss://${Bucket}/${Object}-${Token}_${Index}.ts format. oss://${Bucket}/${Object} specifies the URI specified by input parameters for output files. ${Token} specifies the returned token value, and ${Index} specifies the serial number of a subtitle file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS path of the subtitle media playlist.
   * 
   * @example
   * oss://imm-test/testcases/vide_0.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
      token: 'Token',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
      token: 'string',
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


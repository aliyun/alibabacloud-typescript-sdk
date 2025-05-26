// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistResponseBodyVideoPlaylist extends $dara.Model {
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 25/1
   */
  frameRate?: string;
  /**
   * @remarks
   * The video resolution.
   * 
   * @example
   * 640x480
   */
  resolution?: string;
  /**
   * @remarks
   * The token of the video media playlist. You can use this parameter to generate the path of a TS file.
   * 
   * >  You can generate the path of a transcoded TS file based on the value of this parameter. The path must be in the oss://${Bucket}/${Object}-${Token}-${Index}.ts format. oss://${Bucket}/${Object} specifies the URI specified by input parameters for output files. ${Token} specifies the returned token, and ${Index} specifies the serial number of a TS file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS path of the video media playlist.
   * 
   * @example
   * oss://imm-test/testcases/video.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      token: 'Token',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'string',
      resolution: 'string',
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


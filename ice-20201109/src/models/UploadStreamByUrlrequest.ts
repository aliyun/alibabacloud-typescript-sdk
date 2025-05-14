// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The quality of the media stream. Valid values:
   * 
   * *   FD: low definition.
   * *   LD: standard definition.
   * *   SD: high definition.
   * *   HD: ultra-high definition.
   * *   OD: original quality.
   * *   2K: 2K resolution.
   * *   4K: 4K resolution.
   * *   SQ: standard sound quality.
   * *   HQ: high sound quality.
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The file name extension of the media stream.
   * 
   * @example
   * mp4
   */
  fileExtension?: string;
  /**
   * @remarks
   * The high dynamic range (HDR) format of the transcoded stream. Valid values:
   * 
   * *   HDR
   * *   HDR10
   * *   HLG
   * *   DolbyVision
   * *   HDRVivid
   * *   SDR+
   * 
   * > 
   * 
   * *   The value is not case-sensitive,
   * 
   * *   You can leave this parameter empty for non-HDR streams.
   * 
   * @example
   * HDR10
   */
  HDRType?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 411bed50018971edb60b0764a0ec6***
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the transcoded stream file.
   * 
   * If the URL of the transcoded stream requires authentication, you must specify the authentication parameters in the stream URL and make sure that the URL can be accessed over the Internet.
   * 
   * @example
   * https://example.com/sample-stream.mp4
   */
  streamURL?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://test.test.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      fileExtension: 'FileExtension',
      HDRType: 'HDRType',
      mediaId: 'MediaId',
      streamURL: 'StreamURL',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      fileExtension: 'string',
      HDRType: 'string',
      mediaId: 'string',
      streamURL: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


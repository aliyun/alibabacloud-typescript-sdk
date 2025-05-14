// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadStreamRequest extends $dara.Model {
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
   * MP4
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
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      fileExtension: 'FileExtension',
      HDRType: 'HDRType',
      mediaId: 'MediaId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      fileExtension: 'string',
      HDRType: 'string',
      mediaId: 'string',
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


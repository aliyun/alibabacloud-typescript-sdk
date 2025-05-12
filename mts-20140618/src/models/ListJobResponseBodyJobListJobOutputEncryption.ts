// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputEncryption extends $dara.Model {
  /**
   * @remarks
   * The encryption ID.
   * 
   * @example
   * 31fa3c9ca8134f9cec2b4b0b0f78****
   */
  id?: string;
  /**
   * @remarks
   * The key that is used to encrypt the video.
   * 
   * @example
   * encryptionkey128
   */
  key?: string;
  /**
   * @remarks
   * The key encryption method. Valid values: Base64 and KMS.
   * 
   * >  For example, if the key is encryptionkey128, you can encrypt the key in the Base64 format or use Key Management Service (KMS) to encrypt the key.``````
   * 
   * @example
   * Base64
   */
  keyType?: string;
  /**
   * @remarks
   * The URL that is used to request the key. The URL is Base64-encoded.
   * 
   * @example
   * https://1161758785*****.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/HLS-decyptServer/decyptServer/
   */
  keyUri?: string;
  /**
   * @remarks
   * The number of unencrypted frames at the beginning of the video. Leaving these frames unencrypted enables video playback to quickly start.
   * 
   * @example
   * 3
   */
  skipCnt?: string;
  /**
   * @remarks
   * The encryption type. Only hls-aes-128 may be returned.
   * 
   * @example
   * hls-aes-128
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      keyType: 'KeyType',
      keyUri: 'KeyUri',
      skipCnt: 'SkipCnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      keyType: 'string',
      keyUri: 'string',
      skipCnt: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


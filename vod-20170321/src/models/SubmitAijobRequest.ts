// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The AI job configuration in JSON format.
   * - If `Types` is set to `AIVideoTag`, `Config` supports the `AnalyseTypes` parameter to specify the analysis algorithm types for the intelligent tagging job. Valid values:
   *   - ASR: speech recognition. Identifies tags from the audio speech in the video.
   *   - OCR: optical character recognition. Identifies tags from the text in the video images.
   * - If `Types` is set to `AIMediaDNA`, `Config` supports the `DNADBId` parameter to specify the fingerprint library ID for the media fingerprint job.
   * 
   * @example
   * {"AIVideoTag": {"AnalyseTypes": "ASR"} }
   */
  config?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded in the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId response parameter.
   * - After the video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * 3D3D12340d9401fab46a0b847****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The AI job type. Separate multiple job types with commas (,). Valid values:
   * 
   * - **AIMediaDNA**: media fingerprint.
   * - **AIVideoTag**: intelligent tagging.
   * 
   * @example
   * AIVideoTag
   */
  types?: string;
  /**
   * @remarks
   * The custom settings in JSON format. For more information about the parameter structure, see [UserData](~~86952#h2--userdata-div-id-userdata-div-3~~).
   * 
   * @example
   * {"Extend":{"localId":"***","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      types: 'Types',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      types: 'string',
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


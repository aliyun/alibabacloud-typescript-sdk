// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the AI job. The value is a JSON string.
   * 
   * *   If you set `Types` to `AIVideoTag`, you can specify `AnalyseTypes` for `Config` to set the analysis algorithm of a smart tagging job. Valid values:
   * 
   *     *   ASR: automatic speech recognition (ASR)
   *     *   OCR: image optical character recognition (OCR)
   * 
   * *   If you set `Types` to `AIMediaDNA`, you can specify `DNADBId` for `Config` to set the ID of the media fingerprint library for video fingerprinting jobs.
   * 
   * @example
   * {"AIVideoTag": {"AnalyseTypes": "Face,ASR"} }
   */
  config?: string;
  /**
   * @remarks
   * The ID of the video. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the audio or video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you call to upload media files.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation after you upload media files.
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
   * The type of the AI job. Separate multiple types with commas (,). Valid values:
   * 
   * *   **AIMediaDNA**: The media fingerprinting job.
   * *   **AIVideoTag**: The smart tagging job.
   * 
   * @example
   * AIVideoTag
   */
  types?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string. For more information, see [Request parameters](~~86952#h2--userdata-div-id-userdata-div-3~~).
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


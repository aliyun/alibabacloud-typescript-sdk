// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingJobResponseBodyLiveEditingJobOutputMediaConfig extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output file. Unit: Kbit/s. You can leave this parameter empty. The default value is the maximum bitrate of the input materials.
   * 
   * @example
   * 1000
   */
  bitrate?: number;
  /**
   * @remarks
   * If OutputMediaTarget is set to vod-media, this parameter indicates the file name of the output file. The value contains the file name extension but not the path.
   * 
   * @example
   * test.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The height of the output file. You can leave this parameter empty. The default value is the maximum height of the input materials.
   * 
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * https://testice-testbucket.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * If OutputMediaTarget is set to vod-media, this parameter indicates the storage location of the media asset in ApsaraVideo VOD. The storage location is the path of the file in ApsaraVideo VOD, excluding the prefix http://. Example: outin-xxxxxx.oss-cn-shanghai.aliyuncs.com.
   * 
   * @example
   * outin-xxxxxx.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The ID of the VOD transcoding template group. If VOD transcoding is not required, set the value to VOD_NO_TRANSCODE.
   * 
   * @example
   * VOD_NO_TRANSCODE
   */
  vodTemplateGroupId?: string;
  /**
   * @remarks
   * The width of the output file. You can leave this parameter empty. The default value is the maximum width of the input materials.
   * 
   * @example
   * 640
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      fileName: 'FileName',
      height: 'Height',
      mediaURL: 'MediaURL',
      storageLocation: 'StorageLocation',
      vodTemplateGroupId: 'VodTemplateGroupId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      fileName: 'string',
      height: 'number',
      mediaURL: 'string',
      storageLocation: 'string',
      vodTemplateGroupId: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


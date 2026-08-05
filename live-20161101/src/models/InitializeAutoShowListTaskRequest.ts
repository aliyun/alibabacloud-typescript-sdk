// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeAutoShowListTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://***.com/callback
   */
  callBackUrl?: string;
  /**
   * @remarks
   * The production studio configuration. This includes:
   * 
   * - (Required) CasterTemplate: the output resolution of the production studio.
   * 
   * - (Optional) LiveTemplate: the list of output transcoding tasks.
   * 
   * >A JSON-formatted string. Use upper camel case (PascalCase) for the field names within the struct.
   * 
   * This parameter is required.
   * 
   * @example
   * {"CasterTemplate": "lp_ld","LiveTemplates":["lhd", "lsd","lud"]}
   */
  casterConfig?: string;
  /**
   * @remarks
   * The output streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645688994000
   */
  endTime?: number;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The list of video-on-demand media asset file IDs in the playlist. Currently, only MP4 video files from the video-on-demand platform are supported.
   * 
   * A maximum of three programs are supported. Each program is played in the order of the list until EndTime, at which point playback automatically ends. This parameter is required. If it is missing, a MissingParameter error is returned.
   * >- You can obtain the video file ID from the console or from the response parameters of an API operation. For more information, see [Media asset management](https://help.aliyun.com/document_detail/86057.html) or [Obtain the upload URL and credential for audio and video files](https://help.aliyun.com/document_detail/55407.html).- If all programs finish playing before EndTime, the last frame of the last program is displayed until the scheduled end time.
   * 
   * @example
   * ["89e02xxxxfb349axxxxa0c350d****  ","6ae0xxxxxb349axxxxa0c350a****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645688994000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      callBackUrl: 'CallBackUrl',
      casterConfig: 'CasterConfig',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBackUrl: 'string',
      casterConfig: 'string',
      domainName: 'string',
      endTime: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceIds: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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
   * The configurations of the production studio. The following configurations are involved:
   * 
   * *   CasterTemplate: required. The output resolution.
   * *   LiveTemplate: optional. The templates to be used for transcoding.
   * 
   * >  Set the value to a JSON string. Use upper camel case for fields of the string.
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
  regionId?: string;
  /**
   * @remarks
   * The IDs of on-demand media asset files in the playlist. Only on-demand video files are supported. You can specify up to three video files in the playlist. The video files in the playlist are automatically played in sequence. The playback stops at the point in time specified by the EndTime parameter.
   * 
   * > 
   * 
   * *   You can obtain the ID of a video file in the ApsaraVideo Live console or by calling an API operation. For more information, see [Media asset management](https://help.aliyun.com/document_detail/86057.html) or [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html). - If the video files are all played before the time specified by EndTime, the final frame of the final video file is played until the time specified by EndTime arrives.
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


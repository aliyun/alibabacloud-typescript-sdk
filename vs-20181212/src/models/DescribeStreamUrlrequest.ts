// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamURLRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate a signed URL. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  auth?: boolean;
  /**
   * @remarks
   * The primary key associated with the playback domain name. This key is used to generate the authentication URL.
   * 
   * > Call the [DescribeVsDomainConfigs](https://next.api.aliyun.com/document/vs/2018-12-12/DescribeVsDomainConfigs) operation to query the \\`AuthKey\\` information.
   * 
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @remarks
   * The end time. This parameter applies to \\`vod\\` streams.<br>
   * A UNIX timestamp. Unit: seconds.<br>
   * 
   * @example
   * 1571649499
   */
  endTime?: number;
  /**
   * @remarks
   * The time-to-live (TTL) of the URL. Unit: seconds.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * The stream ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The playback protocol for the stream. Valid values:
   * 
   * - rtmp
   * 
   * - flv
   * 
   * - hls
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time. This parameter applies to \\`vod\\` streams.<br>
   * A UNIX timestamp. Unit: seconds.<br>
   * 
   * @example
   * 1571639499
   */
  startTime?: number;
  /**
   * @remarks
   * The name of the transcoding rule. This parameter is valid only after a transcoding template is attached.
   * 
   * @example
   * sd
   */
  transcode?: string;
  /**
   * @remarks
   * The type of the stream. The default value is \\`live\\`. Valid values:
   * 
   * - \\`live\\`: a live stream.
   * 
   * - \\`vod\\`: a video-on-demand (VOD) stream, such as a historical stream from a Network Video Recorder (NVR).
   * 
   * @example
   * live
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      authKey: 'AuthKey',
      endTime: 'EndTime',
      expire: 'Expire',
      id: 'Id',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      transcode: 'Transcode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
      authKey: 'string',
      endTime: 'number',
      expire: 'number',
      id: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      startTime: 'number',
      transcode: 'string',
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


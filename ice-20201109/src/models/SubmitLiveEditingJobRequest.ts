// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveEditingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The list of clip segments. The output is produced by concatenating the segments in the list in order. JSON Array.
   * 
   * Each segment contains a start time and an end time. If no live stream parameters are specified, the outer-level live stream configuration is used. Both start and end timestamps are in UTC. For parameter details, see the Clip data structure below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"StartTime\\": \\" 2021-06-21T08:01:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:03:00Z\\" ,  "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"},  {\\"StartTime\\": \\" 2021-06-21T08:05:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:09:00Z\\" }]
   */
  clips?: string;
  /**
   * @remarks
   * The live stream configuration. JSON Object. The following configuration items are required:
   * 
   * - AppName: the name of the application to which the stream belongs. 
   * 
   * - DomainName: the domain name.
   * 
   * - StreamName: the name of the live stream.
   * 
   * @example
   * { "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"  }
   */
  liveStreamConfig?: string;
  /**
   * @remarks
   * The composition configuration for generating segments, in JSON format. Mode specifies the editing mode. Valid values:
   * - **AccurateFast** (default): fast accurate editing. This mode is faster than the Accurate mode. The output file resolution is the same as the source stream resolution. Custom output width and height are not supported.
   * - **Accurate**: accurate editing. You can specify the output width and height.
   * - **Rough**: rough editing. The minimum precision is one TS segment. The output contains all segments within the specified start and end time. You can specify the output width and height.
   * - **RoughFast**: fast rough editing. This mode is faster than the Accurate mode. The minimum precision is one TS segment. The output contains all segments within the specified start and end time. The output file resolution is the same as the source stream resolution. Custom output width and height are not supported.
   * 
   * @example
   * { "Mode": "AccurateFast"}
   */
  mediaProduceConfig?: string;
  /**
   * @remarks
   * The destination configuration for the output. JSON Object. You can specify the URL of the output on OSS or the storage location in a VOD bucket.
   * - When outputting to OSS, the MediaURL of the output destination is required.
   * - When outputting to VOD, the StorageLocation and FileName parameters are required.
   * 
   * @example
   * { "MediaURL": "https://ice-auto-test.oss-cn-shanghai.aliyuncs.com/testfile.mp4" }, or { "StorageLocation": "bucket.oss-cn-shanghai.aliyuncs.com", "FileName": "output.mp4" }
   */
  outputMediaConfig?: string;
  /**
   * @remarks
   * The target type of the output. Valid values:
   * - oss-object: an OSS object in an Alibaba Cloud OSS bucket.
   * - vod-media: a media asset in Alibaba Cloud VOD.
   * 
   * @example
   * oss-object
   */
  outputMediaTarget?: string;
  /**
   * @remarks
   * The ID of the live editing project. If this parameter is not empty, the storage configuration associated with the project is used. If this parameter is empty, the storage configuration specified in the request parameters is used.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The custom settings. JSON Object. Maximum length: 512 bytes.
   * 
   * @example
   * {"key": "value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      liveStreamConfig: 'LiveStreamConfig',
      mediaProduceConfig: 'MediaProduceConfig',
      outputMediaConfig: 'OutputMediaConfig',
      outputMediaTarget: 'OutputMediaTarget',
      projectId: 'ProjectId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: 'string',
      liveStreamConfig: 'string',
      mediaProduceConfig: 'string',
      outputMediaConfig: 'string',
      outputMediaTarget: 'string',
      projectId: 'string',
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


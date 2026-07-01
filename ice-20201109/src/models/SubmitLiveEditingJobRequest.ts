// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveEditingJobRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON array that specifies the clips to edit. The job creates the output file by concatenating these clips in the specified order.
   * 
   * Each clip includes a start and end time. If live stream parameters are not specified for a clip, the system uses the global `LiveStreamConfig` settings. The start and end timestamps must be in UTC. For more details, see the Clip data structure below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"StartTime\\": \\" 2021-06-21T08:01:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:03:00Z\\" ,  "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"},  {\\"StartTime\\": \\" 2021-06-21T08:05:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:09:00Z\\" }]
   */
  clips?: string;
  /**
   * @remarks
   * The configuration of the source live stream, specified as a JSON object. It includes the following parameters:
   * 
   * - `AppName`: The name of the application to which the stream belongs.
   * 
   * - `DomainName`: The domain name of the stream.
   * 
   * - `StreamName`: The name of the live stream.
   * 
   * @example
   * { "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"  }
   */
  liveStreamConfig?: string;
  /**
   * @remarks
   * The production configuration for the output file, specified as a JSON object. The `Mode` parameter specifies the editing mode. Valid values are:
   * 
   * - **AccurateFast** (Default): Fast and precise editing. It offers faster processing compared to the `Accurate` mode. The output file has the same resolution as the source stream. You cannot specify a custom width and height for the output file.
   * 
   * - **Accurate**: Precise editing. This mode lets you specify a custom width and height for the output file.
   * 
   * - **Rough**: Rough editing with a precision of a single TS segment. The output file includes all segments between the specified start and end times. You can specify a custom width and height for the output file.
   * 
   * - **RoughFast**: Fast rough-cut editing, which is faster than the `Accurate` mode. It has a precision of a single TS segment, and the output file includes all segments between the specified start and end times. The output file has the same resolution as the source stream. You cannot specify a custom width and height for the output file.
   * 
   * @example
   * { "Mode": "AccurateFast"}
   */
  mediaProduceConfig?: string;
  /**
   * @remarks
   * The destination configuration for the output file, specified as a JSON object. You can specify either a URL on OSS or a storage location in a VOD bucket.
   * 
   * - To output to OSS, the `MediaURL` parameter is required.
   * 
   * - To output to VOD, the `StorageLocation` and `FileName` parameters are required.
   * 
   * @example
   * { "MediaURL": "https://ice-auto-test.oss-cn-shanghai.aliyuncs.com/testfile.mp4" }, or { "StorageLocation": "bucket.oss-cn-shanghai.aliyuncs.com", "FileName": "output.mp4" }
   */
  outputMediaConfig?: string;
  /**
   * @remarks
   * The destination type for the output file. Valid values:
   * 
   * - `oss-object`: An object in an Alibaba Cloud OSS bucket.
   * 
   * - `vod-media`: A media asset in Alibaba Cloud VOD.
   * 
   * @example
   * oss-object
   */
  outputMediaTarget?: string;
  /**
   * @remarks
   * The ID of the live editing project. If you specify this parameter, the system uses the storage settings from the project. If left empty, the system uses the storage settings provided in the request instead.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * Custom user data, provided as a JSON object. The maximum length is 512 bytes.
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


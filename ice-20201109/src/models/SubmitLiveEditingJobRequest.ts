// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveEditingJobRequest extends $dara.Model {
  /**
   * @remarks
   * The clips in the JSON array format. The output video is created by merging these clips sequentially.
   * 
   * Each clip has a start time and an end time. If no live stream parameters are specified, the outer live stream configurations apply. The start and end timestamps are in UTC. For more information about the parameters, see the "Clip" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"StartTime\\": \\" 2021-06-21T08:01:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:03:00Z\\" ,  "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"},  {\\"StartTime\\": \\" 2021-06-21T08:05:00Z\\",  \\"EndTime\\": \\" 2021-06-21T08:09:00Z\\" }]
   */
  clips?: string;
  /**
   * @remarks
   * The live stream configurations, in the JSON format. The configurations must include the following parameters:
   * 
   * *   AppName: the name of the application to which the live stream belongs.
   * *   DomainName: the domain name of the application.
   * *   StreamName: the name of the live stream.
   * 
   * @example
   * { "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"  }
   */
  liveStreamConfig?: string;
  /**
   * @remarks
   * The production configurations, in the JSON format. Mode specifies the editing mode. Valid values:
   * 
   * *   **AccurateFast** (default): fast editing. It is faster than the Accurate mode. The resolution of the output file is the same as that of the source stream. You cannot specify the width and height of the output file.
   * *   **Accurate**: accurate editing. In this mode, you can specify the width and height of the output file.
   * *   **Rough**: rough editing. The minimum precision is one TS segment. The output file comprises all segments within the specified time range. You can specify the width and height of the output file.
   * *   **RoughFast**: fast rough editing. It is faster than the Accurate mode. The minimum precision is one TS segment. The output file comprises all segments within the specified time range. The resolution of the output file is the same as that of the source stream. You cannot specify the width and height of the output file.
   * 
   * @example
   * { "Mode": "AccurateFast"}
   */
  mediaProduceConfig?: string;
  /**
   * @remarks
   * The configurations of the output file, in the JSON format. You can specify an OSS URL or a storage location in a storage bucket of ApsaraVideo VOD.
   * 
   * *   To store the output file in OSS, you must specify MediaURL.
   * *   To store the output file in ApsaraVideo VOD, you must specify StorageLocation and FileName.
   */
  outputMediaConfig?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   oss-object: OSS object in an OSS bucket.
   * *   vod-media: media asset in Alibaba Cloud VOD.
   * 
   * @example
   * oss-object
   */
  outputMediaTarget?: string;
  /**
   * @remarks
   * The ID of the live editing project. If this parameter is specified, the system reads the storage configurations of the project. If this parameter is not specified, the specified storage configurations take precedence.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which can be up to 512 bytes in length.
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


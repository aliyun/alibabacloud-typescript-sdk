// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputAudio } from "./QueryJobListResponseBodyJobListJobOutputAudio";
import { QueryJobListResponseBodyJobListJobOutputClip } from "./QueryJobListResponseBodyJobListJobOutputClip";
import { QueryJobListResponseBodyJobListJobOutputContainer } from "./QueryJobListResponseBodyJobListJobOutputContainer";
import { QueryJobListResponseBodyJobListJobOutputEncryption } from "./QueryJobListResponseBodyJobListJobOutputEncryption";
import { QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport } from "./QueryJobListResponseBodyJobListJobOutputM3u8nonStandardSupport";
import { QueryJobListResponseBodyJobListJobOutputMergeList } from "./QueryJobListResponseBodyJobListJobOutputMergeList";
import { QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo } from "./QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo";
import { QueryJobListResponseBodyJobListJobOutputMuxConfig } from "./QueryJobListResponseBodyJobListJobOutputMuxConfig";
import { QueryJobListResponseBodyJobListJobOutputOpeningList } from "./QueryJobListResponseBodyJobListJobOutputOpeningList";
import { QueryJobListResponseBodyJobListJobOutputOutSubtitleList } from "./QueryJobListResponseBodyJobListJobOutputOutSubtitleList";
import { QueryJobListResponseBodyJobListJobOutputOutputFile } from "./QueryJobListResponseBodyJobListJobOutputOutputFile";
import { QueryJobListResponseBodyJobListJobOutputProperties } from "./QueryJobListResponseBodyJobListJobOutputProperties";
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfig } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfig";
import { QueryJobListResponseBodyJobListJobOutputSuperReso } from "./QueryJobListResponseBodyJobListJobOutputSuperReso";
import { QueryJobListResponseBodyJobListJobOutputTailSlateList } from "./QueryJobListResponseBodyJobListJobOutputTailSlateList";
import { QueryJobListResponseBodyJobListJobOutputTransConfig } from "./QueryJobListResponseBodyJobListJobOutputTransConfig";
import { QueryJobListResponseBodyJobListJobOutputVideo } from "./QueryJobListResponseBodyJobListJobOutputVideo";
import { QueryJobListResponseBodyJobListJobOutputWaterMarkList } from "./QueryJobListResponseBodyJobListJobOutputWaterMarkList";


export class QueryJobListResponseBodyJobListJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  audio?: QueryJobListResponseBodyJobListJobOutputAudio;
  /**
   * @remarks
   * The sequence number of the audio stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example: 0:a:0.
   * *   The sequence number is the index of the audio stream in the list and starts from 0.
   * *   If no sequence number is specified, the default audio stream is used.
   * 
   * @example
   * 0:a:0
   */
  audioStreamMap?: string;
  /**
   * @remarks
   * The information about clips.
   */
  clip?: QueryJobListResponseBodyJobListJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: QueryJobListResponseBodyJobListJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see the DeWatermark section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"0":[{"l":10,"t":10,"w":10,"h":10},{"l":100,"t":0.1,"w":10,"h":10}],"128000":[],"250000":[{"l":0.2,"t":0.1,"w":0.01,"h":0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The encryption configurations. The encrypted video file is generated in the M3U8 format.
   */
  encryption?: QueryJobListResponseBodyJobListJobOutputEncryption;
  /**
   * @remarks
   * The custom fields.
   * 
   * @example
   * testid-002
   */
  extendData?: string;
  /**
   * @remarks
   * The non-standard support configurations for M3U8. The value is a JSON object. For more information, see the M3U8NonStandardSupport section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  m3U8NonStandardSupport?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. Only one of MergeList and MergeConfigUrl takes effect.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips. Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details about merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * https://ceshi-***.oss-cn-shanghai.aliyuncs.com/ccc/p0903q9wkkb.m3u8
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations of clip merging. Up to four clips can be merged.
   */
  mergeList?: QueryJobListResponseBodyJobListJobOutputMergeList;
  /**
   * @remarks
   * The information about the high-speed transcoding job. This information is available only for jobs that are submitted by using an MPS queue for high-speed transcoding. This does not support MPS queues for high-speed transcoding of an earlier version.
   */
  multiSpeedInfo?: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo;
  /**
   * @remarks
   * The transmuxing configurations. The transmuxing configurations. If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  muxConfig?: QueryJobListResponseBodyJobListJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts. The value is a JSON object.
   */
  openingList?: QueryJobListResponseBodyJobListJobOutputOpeningList;
  /**
   * @remarks
   * The output captions.
   */
  outSubtitleList?: QueryJobListResponseBodyJobListJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: QueryJobListResponseBodyJobListJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the ApsaraVideo Media Processing (MPS) queue to which the job is added.
   * 
   * *   A value of 10 indicates the highest priority.
   * *   Default value: **6**.
   * 
   * @example
   * 6
   */
  priority?: string;
  /**
   * @remarks
   * The media properties.
   */
  properties?: QueryJobListResponseBodyJobListJobOutputProperties;
  /**
   * @remarks
   * The rotation angle of the video.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The caption configurations.
   */
  subtitleConfig?: QueryJobListResponseBodyJobListJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: QueryJobListResponseBodyJobListJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts.
   */
  tailSlateList?: QueryJobListResponseBodyJobListJobOutputTailSlateList;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000001-200010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  transConfig?: QueryJobListResponseBodyJobListJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   */
  video?: QueryJobListResponseBodyJobListJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream. The sequence number is the index of the video stream in the list and starts from 0. If no sequence number is specified, the default video stream is used.
   * 
   * @example
   * 0
   */
  videoStreamMap?: string;
  /**
   * @remarks
   * The URL of the watermark configuration file.
   * 
   * @example
   * http://example.com/configure
   */
  waterMarkConfigUrl?: string;
  /**
   * @remarks
   * The watermarks.
   */
  waterMarkList?: QueryJobListResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      extendData: 'ExtendData',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
      multiSpeedInfo: 'MultiSpeedInfo',
      muxConfig: 'MuxConfig',
      openingList: 'OpeningList',
      outSubtitleList: 'OutSubtitleList',
      outputFile: 'OutputFile',
      priority: 'Priority',
      properties: 'Properties',
      rotate: 'Rotate',
      subtitleConfig: 'SubtitleConfig',
      superReso: 'SuperReso',
      tailSlateList: 'TailSlateList',
      templateId: 'TemplateId',
      transConfig: 'TransConfig',
      userData: 'UserData',
      video: 'Video',
      videoStreamMap: 'VideoStreamMap',
      waterMarkConfigUrl: 'WaterMarkConfigUrl',
      waterMarkList: 'WaterMarkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: QueryJobListResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: QueryJobListResponseBodyJobListJobOutputClip,
      container: QueryJobListResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: QueryJobListResponseBodyJobListJobOutputEncryption,
      extendData: 'string',
      m3U8NonStandardSupport: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: QueryJobListResponseBodyJobListJobOutputMergeList,
      multiSpeedInfo: QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo,
      muxConfig: QueryJobListResponseBodyJobListJobOutputMuxConfig,
      openingList: QueryJobListResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: QueryJobListResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: QueryJobListResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: QueryJobListResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: QueryJobListResponseBodyJobListJobOutputSubtitleConfig,
      superReso: QueryJobListResponseBodyJobListJobOutputSuperReso,
      tailSlateList: QueryJobListResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: QueryJobListResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: QueryJobListResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: QueryJobListResponseBodyJobListJobOutputWaterMarkList,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.m3U8NonStandardSupport && typeof (this.m3U8NonStandardSupport as any).validate === 'function') {
      (this.m3U8NonStandardSupport as any).validate();
    }
    if(this.mergeList && typeof (this.mergeList as any).validate === 'function') {
      (this.mergeList as any).validate();
    }
    if(this.multiSpeedInfo && typeof (this.multiSpeedInfo as any).validate === 'function') {
      (this.multiSpeedInfo as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.openingList && typeof (this.openingList as any).validate === 'function') {
      (this.openingList as any).validate();
    }
    if(this.outSubtitleList && typeof (this.outSubtitleList as any).validate === 'function') {
      (this.outSubtitleList as any).validate();
    }
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.subtitleConfig && typeof (this.subtitleConfig as any).validate === 'function') {
      (this.subtitleConfig as any).validate();
    }
    if(this.superReso && typeof (this.superReso as any).validate === 'function') {
      (this.superReso as any).validate();
    }
    if(this.tailSlateList && typeof (this.tailSlateList as any).validate === 'function') {
      (this.tailSlateList as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    if(this.waterMarkList && typeof (this.waterMarkList as any).validate === 'function') {
      (this.waterMarkList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


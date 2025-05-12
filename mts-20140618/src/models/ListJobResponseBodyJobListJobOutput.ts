// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputAudio } from "./ListJobResponseBodyJobListJobOutputAudio";
import { ListJobResponseBodyJobListJobOutputClip } from "./ListJobResponseBodyJobListJobOutputClip";
import { ListJobResponseBodyJobListJobOutputContainer } from "./ListJobResponseBodyJobListJobOutputContainer";
import { ListJobResponseBodyJobListJobOutputEncryption } from "./ListJobResponseBodyJobListJobOutputEncryption";
import { ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport } from "./ListJobResponseBodyJobListJobOutputM3u8nonStandardSupport";
import { ListJobResponseBodyJobListJobOutputMergeList } from "./ListJobResponseBodyJobListJobOutputMergeList";
import { ListJobResponseBodyJobListJobOutputMuxConfig } from "./ListJobResponseBodyJobListJobOutputMuxConfig";
import { ListJobResponseBodyJobListJobOutputOpeningList } from "./ListJobResponseBodyJobListJobOutputOpeningList";
import { ListJobResponseBodyJobListJobOutputOutSubtitleList } from "./ListJobResponseBodyJobListJobOutputOutSubtitleList";
import { ListJobResponseBodyJobListJobOutputOutputFile } from "./ListJobResponseBodyJobListJobOutputOutputFile";
import { ListJobResponseBodyJobListJobOutputProperties } from "./ListJobResponseBodyJobListJobOutputProperties";
import { ListJobResponseBodyJobListJobOutputSubtitleConfig } from "./ListJobResponseBodyJobListJobOutputSubtitleConfig";
import { ListJobResponseBodyJobListJobOutputSuperReso } from "./ListJobResponseBodyJobListJobOutputSuperReso";
import { ListJobResponseBodyJobListJobOutputTailSlateList } from "./ListJobResponseBodyJobListJobOutputTailSlateList";
import { ListJobResponseBodyJobListJobOutputTransConfig } from "./ListJobResponseBodyJobListJobOutputTransConfig";
import { ListJobResponseBodyJobListJobOutputVideo } from "./ListJobResponseBodyJobListJobOutputVideo";
import { ListJobResponseBodyJobListJobOutputWaterMarkList } from "./ListJobResponseBodyJobListJobOutputWaterMarkList";


export class ListJobResponseBodyJobListJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio configurations.
   */
  audio?: ListJobResponseBodyJobListJobOutputAudio;
  /**
   * @remarks
   * The sequence number of the audio stream.
   * 
   * *   Format: `0:a:{Sequence number}`.
   * *   The sequence number is the index of the audio stream in the list and starts from 0. If no sequence number is specified, the default audio stream is used.
   * 
   * @example
   * 0:a:0
   */
  audioStreamMap?: string;
  /**
   * @remarks
   * The information about the clip.
   */
  clip?: ListJobResponseBodyJobListJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: ListJobResponseBodyJobListJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * {"0": [{"l": 10,"t": 10,"w": 10,"h": 10},{"l": 100,"t": 0.1,"w": 10,"h": 10}],"128000": [],"250000": [{"l": 0.2,"t": 0.1,"w": 0.01,"h": 0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The encryption configurations. Only outputs in the M3U8 format are supported.
   */
  encryption?: ListJobResponseBodyJobListJobOutputEncryption;
  /**
   * @remarks
   * The non-standard support configuration for M3U8. The value must be a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   */
  m3U8NonStandardSupport?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. You can specify either MergeList or MergeConfigUrl when you submit the transcoding job.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips.
   * *   Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details of merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * {"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations for merging clips.
   */
  mergeList?: ListJobResponseBodyJobListJobOutputMergeList;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: ListJobResponseBodyJobListJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts.
   */
  openingList?: ListJobResponseBodyJobListJobOutputOpeningList;
  /**
   * @remarks
   * The output subtitles.
   */
  outSubtitleList?: ListJobResponseBodyJobListJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: ListJobResponseBodyJobListJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is added.
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
  properties?: ListJobResponseBodyJobListJobOutputProperties;
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
   * The subtitle configurations.
   */
  subtitleConfig?: ListJobResponseBodyJobListJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: ListJobResponseBodyJobListJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts.
   */
  tailSlateList?: ListJobResponseBodyJobListJobOutputTailSlateList;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000000-000010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations. If this parameter is specified in the request, the corresponding parameters in the specified transcoding template are overwritten.
   */
  transConfig?: ListJobResponseBodyJobListJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * test-001
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   */
  video?: ListJobResponseBodyJobListJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example value: 0:a:0.
   * *   The sequence number is the index of the video stream in the list and starts from 0.
   * *   If no sequence number is specified, the default video stream is used.
   * 
   * @example
   * 0:a:0
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
  waterMarkList?: ListJobResponseBodyJobListJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      encryption: 'Encryption',
      m3U8NonStandardSupport: 'M3U8NonStandardSupport',
      mergeConfigUrl: 'MergeConfigUrl',
      mergeList: 'MergeList',
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
      audio: ListJobResponseBodyJobListJobOutputAudio,
      audioStreamMap: 'string',
      clip: ListJobResponseBodyJobListJobOutputClip,
      container: ListJobResponseBodyJobListJobOutputContainer,
      deWatermark: 'string',
      encryption: ListJobResponseBodyJobListJobOutputEncryption,
      m3U8NonStandardSupport: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: ListJobResponseBodyJobListJobOutputMergeList,
      muxConfig: ListJobResponseBodyJobListJobOutputMuxConfig,
      openingList: ListJobResponseBodyJobListJobOutputOpeningList,
      outSubtitleList: ListJobResponseBodyJobListJobOutputOutSubtitleList,
      outputFile: ListJobResponseBodyJobListJobOutputOutputFile,
      priority: 'string',
      properties: ListJobResponseBodyJobListJobOutputProperties,
      rotate: 'string',
      subtitleConfig: ListJobResponseBodyJobListJobOutputSubtitleConfig,
      superReso: ListJobResponseBodyJobListJobOutputSuperReso,
      tailSlateList: ListJobResponseBodyJobListJobOutputTailSlateList,
      templateId: 'string',
      transConfig: ListJobResponseBodyJobListJobOutputTransConfig,
      userData: 'string',
      video: ListJobResponseBodyJobListJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: ListJobResponseBodyJobListJobOutputWaterMarkList,
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


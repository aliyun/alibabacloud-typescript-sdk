// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputClip } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputClip";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputM3u8nonStandardSupport";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutput extends $dara.Model {
  /**
   * @remarks
   * The audio tracks that are mixed.
   */
  amixList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList;
  /**
   * @remarks
   * The audio configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding configurations in the specified transcoding template are overwritten.
   */
  audio?: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio;
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
   * The information about the clip.
   */
  clip?: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer;
  /**
   * @remarks
   * The configurations of watermark blurring. The value is a JSON object. For more information, see the **DeWatermark** section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"0": [{"l": 10,"t": 10,"w": 10,"h": 10},{"l": 100,"t": 0.1,"w": 10,"h": 10}],"128000": [],"250000": [{"l": 0.2,"t": 0.1,"w": 0.01,"h": 0.05}]}
   */
  deWatermark?: string;
  /**
   * @remarks
   * The digital watermarks.
   */
  digiWaterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark;
  /**
   * @remarks
   * The encryption configurations. Only outputs in the M3U8 format are supported.
   */
  encryption?: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption;
  /**
   * @remarks
   * The non-standard support configuration for M3U8. The value is a JSON object. For more information, see the **M3U8NonStandardSupport** section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  m3U8NonStandardSupport?: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport;
  /**
   * @remarks
   * The URL of the merging configuration file. Only one of **MergeList** and **MergeConfigUrl** takes effect.
   * 
   * *   The configuration file specified by MergeConfigUrl can contain up to 50 clips.
   * *   MergeConfigUrl indicates the URL of the configuration file for merging clips.
   * *   Make sure that the configuration file is stored as an object in OSS and that MPS can access the OSS object. For information about the file content, see the details about merging parameters.
   * *   Example of the content of the merging configuration file: `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`.
   * 
   * @example
   * `{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}
   */
  mergeConfigUrl?: string;
  /**
   * @remarks
   * The configurations for merging clips.
   */
  mergeList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList;
  /**
   * @remarks
   * The transmuxing configurations. If this parameter is specified in the request, the corresponding configurations in the specified transcoding template are overwritten.
   */
  muxConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig;
  /**
   * @remarks
   * The opening parts. The value is a JSON object.
   */
  openingList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList;
  /**
   * @remarks
   * The output subtitles.
   */
  outSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList;
  /**
   * @remarks
   * The details of the output file.
   */
  outputFile?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile;
  /**
   * @remarks
   * The priority of the job in the MPS queue to which the job is added.
   * 
   * *   A value of **10** indicates the highest priority.
   * *   Default value: **6**.
   * 
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The media properties.
   */
  properties?: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties;
  /**
   * @remarks
   * The rotation angle of the video, in the clockwise direction.
   * 
   * @example
   * 180
   */
  rotate?: string;
  /**
   * @remarks
   * The subtitle configurations.
   */
  subtitleConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig;
  /**
   * @remarks
   * The configurations for using the resolution of the source video.
   */
  superReso?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso;
  /**
   * @remarks
   * The ending parts. The value is a JSON object.
   */
  tailSlateList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * S00000000-000010
   */
  templateId?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   * 
   * >  If this parameter is specified in the request, the corresponding parameter in the specified transcoding template are overwritten.
   */
  transConfig?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example data
   */
  userData?: string;
  /**
   * @remarks
   * The video configurations.
   * 
   * >  If this parameter is specified, **AliyunVideoCodec** in the template specified by **TemplateId** is overwritten.
   */
  video?: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo;
  /**
   * @remarks
   * The sequence number of the video stream.
   * 
   * *   Format: 0:a:{Sequence number}. Example: 0:a:0.
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
   * 
   * >  If watermarks are truncated or fail to be generated, check whether the text watermarks that you add contain special characters. If the text watermarks contain special characters, you must escape the special characters before you add the watermarks. Alternatively, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.12246746.top-nav.dticket.68797bbcm8H408#/ticket/add/?productId=1232) to contact Alibaba Cloud customer service for compatibility processing.
   */
  waterMarkList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList;
  static names(): { [key: string]: string } {
    return {
      amixList: 'AmixList',
      audio: 'Audio',
      audioStreamMap: 'AudioStreamMap',
      clip: 'Clip',
      container: 'Container',
      deWatermark: 'DeWatermark',
      digiWaterMark: 'DigiWaterMark',
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
      amixList: SubmitJobsResponseBodyJobResultListJobResultJobOutputAmixList,
      audio: SubmitJobsResponseBodyJobResultListJobResultJobOutputAudio,
      audioStreamMap: 'string',
      clip: SubmitJobsResponseBodyJobResultListJobResultJobOutputClip,
      container: SubmitJobsResponseBodyJobResultListJobResultJobOutputContainer,
      deWatermark: 'string',
      digiWaterMark: SubmitJobsResponseBodyJobResultListJobResultJobOutputDigiWaterMark,
      encryption: SubmitJobsResponseBodyJobResultListJobResultJobOutputEncryption,
      m3U8NonStandardSupport: SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupport,
      mergeConfigUrl: 'string',
      mergeList: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList,
      muxConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputMuxConfig,
      openingList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList,
      outSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList,
      outputFile: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutputFile,
      priority: 'string',
      properties: SubmitJobsResponseBodyJobResultListJobResultJobOutputProperties,
      rotate: 'string',
      subtitleConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig,
      superReso: SubmitJobsResponseBodyJobResultListJobResultJobOutputSuperReso,
      tailSlateList: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList,
      templateId: 'string',
      transConfig: SubmitJobsResponseBodyJobResultListJobResultJobOutputTransConfig,
      userData: 'string',
      video: SubmitJobsResponseBodyJobResultListJobResultJobOutputVideo,
      videoStreamMap: 'string',
      waterMarkConfigUrl: 'string',
      waterMarkList: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList,
    };
  }

  validate() {
    if(this.amixList && typeof (this.amixList as any).validate === 'function') {
      (this.amixList as any).validate();
    }
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.clip && typeof (this.clip as any).validate === 'function') {
      (this.clip as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.digiWaterMark && typeof (this.digiWaterMark as any).validate === 'function') {
      (this.digiWaterMark as any).validate();
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


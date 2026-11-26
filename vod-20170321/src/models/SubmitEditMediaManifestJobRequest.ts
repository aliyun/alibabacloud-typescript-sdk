// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEditMediaManifestJobRequest extends $dara.Model {
  /**
   * @remarks
   * The list of audio tracks to be added, specified as a JSON string array. Each element contains:
   * - **Language**: the audio language identifier.
   * - **Name**: the display name of the track. If not specified, the default value is audio-{Language}.
   * - **AudioUrl**: the URL of the audio file (OSS file URL).
   * 
   * @example
   * [{"Language":"spa","Name":"audio-spa","AudioUrl":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/audio/spa.aac"}]
   */
  audioTracks?: string;
  /**
   * @remarks
   * The job ID of the target AUTO stream.
   * 
   * This parameter is required.
   * 
   * @example
   * 2c6581d59240de5e258ffa4c71a3****
   */
  autoStreamJobId?: string;
  /**
   * @remarks
   * The output configuration, specified as a JSON string. It contains:
   * - **OutputDir**: the output directory. By default, it is the same directory as the source manifest.
   * - **ManifestName**: the file name of the output master playlist. Default value: master. The .m3u8 suffix is not allowed.
   * 
   * @example
   * {"OutputDir":"output/editmanifest/","ManifestName":"master"}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The configuration of tracks to be removed, specified as a JSON string. It contains:
   * - **AudioLanguages**: the list of audio language identifiers for which the entire tracks are to be removed.
   * - **SubtitleLanguages**: the list of subtitle language identifiers for which the entire tracks are to be removed.
   * 
   * @example
   * {"AudioLanguages":["fra"],"SubtitleLanguages":["ger"]}
   */
  removeTracks?: string;
  /**
   * @remarks
   * The list of subtitle tracks to be added, specified as a JSON string array. Each element contains:
   * - **Language**: the subtitle language identifier. If not specified, the subtitle track is ignored.
   * - **SubtitleUrl**: the URL of the subtitle file (WebVTT) (OSS file URL).
   * 
   * @example
   * [{"Language":"eng","SubtitleUrl":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/sub/eng.vtt"}]
   */
  subtitles?: string;
  /**
   * @remarks
   * The ID of the manifest edit template, which is returned after calling AddManifestEditTemplate. If specified, the output tracks are orchestrated based on the fixed Video, Audio, and Subtitle item configurations in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 9c6581d59240de5e258ffa4c71a3e01b
   */
  templateId?: string;
  /**
   * @remarks
   * The custom pass-through data.
   * 
   * @example
   * {"remark":"add-french-remove-english"}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the target video, used for authentication isolation and consistency verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 2cd8a4f4a67cb7fb8e1236f847f4****
   */
  videoId?: string;
  /**
   * @remarks
   * The list of video tracks to be added, specified as a JSON string array. Each element contains:
   * - **Name**: the display name of the track. If not specified, the video track is ignored.
   * - **VideoUrl**: the URL of the video stream manifest file (OSS file URL).
   * 
   * @example
   * [{"Name":"uhd","VideoUrl":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/video/uhd/uhd.m3u8"}]
   */
  videoTracks?: string;
  static names(): { [key: string]: string } {
    return {
      audioTracks: 'AudioTracks',
      autoStreamJobId: 'AutoStreamJobId',
      outputConfig: 'OutputConfig',
      removeTracks: 'RemoveTracks',
      subtitles: 'Subtitles',
      templateId: 'TemplateId',
      userData: 'UserData',
      videoId: 'VideoId',
      videoTracks: 'VideoTracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioTracks: 'string',
      autoStreamJobId: 'string',
      outputConfig: 'string',
      removeTracks: 'string',
      subtitles: 'string',
      templateId: 'string',
      userData: 'string',
      videoId: 'string',
      videoTracks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


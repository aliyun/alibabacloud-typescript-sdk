// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetSubtitleExtractSubtitle extends $dara.Model {
  /**
   * @remarks
   * The format of the extracted subtitle file. Valid values:
   * 
   * *   ass
   * *   srt
   * *   webvtt
   * 
   * @example
   * webvtt
   */
  format?: string;
  /**
   * @remarks
   * The prefix of the OSS URI where the extracted subtitles are stored. The OSS URI is in the oss://bucket/object format, where bucket specifies the name of the OSS bucket that is in the same region as the current project and object specifies the full file path that includes the file name extension.
   * 
   * *   Example: If the prefix is oss://examplebucket/outputSubtitle, an output subtitle file has a URI in the format of oss://examplebucket/outputSubitile_${index}.${ext}. In the URI format, ${ext} is the file name extension of the output subtitle file, and ${index} is the same 0-based index number as that of the corresponding source subtitle stream file.
   * 
   * @example
   * oss://test-bucket/extractsubtitle
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetSubtitle extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable subtitle generation. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * >  If you call the GenerateVideoPlaylist operation and subtitles are required, you must set this parameter to false.
   * 
   * @example
   * false
   */
  disableSubtitle?: boolean;
  /**
   * @remarks
   * The subtitle extraction settings.
   * 
   * >  The GenerateVideoPlaylist operation does not support this parameter.
   */
  extractSubtitle?: TargetSubtitleExtractSubtitle;
  /**
   * @remarks
   * The index numbers of subtitle streams that need to be processed. If you set this parameter to null (default) or a value greater than 100, all subtitle streams are processed.
   * 
   * *   For example, you can set the parameter to `[0,1]` to process subtitle streams with index numbers 0 and 1, `[1]` to process only the subtitle stream with the index number 1, and `[101]` to process all subtitle streams.
   * 
   * >  If you specify an index number but no subtitle stream with the index number is found, the index number is ignored.
   */
  stream?: number[];
  static names(): { [key: string]: string } {
    return {
      disableSubtitle: 'DisableSubtitle',
      extractSubtitle: 'ExtractSubtitle',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSubtitle: 'boolean',
      extractSubtitle: TargetSubtitleExtractSubtitle,
      stream: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.extractSubtitle && typeof (this.extractSubtitle as any).validate === 'function') {
      (this.extractSubtitle as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


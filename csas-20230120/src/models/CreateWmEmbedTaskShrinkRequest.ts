// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskShrinkRequest extends $dara.Model {
  audioControlShrink?: string;
  csvControlShrink?: string;
  documentControlShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  imageControlShrink?: string;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  invisibleEnable?: boolean;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  videoControlShrink?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      audioControlShrink: 'AudioControl',
      csvControlShrink: 'CsvControl',
      documentControlShrink: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageControlShrink: 'ImageControl',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      invisibleEnable: 'InvisibleEnable',
      videoBitrate: 'VideoBitrate',
      videoControlShrink: 'VideoControl',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioControlShrink: 'string',
      csvControlShrink: 'string',
      documentControlShrink: 'string',
      fileUrl: 'string',
      filename: 'string',
      imageControlShrink: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      invisibleEnable: 'boolean',
      videoBitrate: 'string',
      videoControlShrink: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


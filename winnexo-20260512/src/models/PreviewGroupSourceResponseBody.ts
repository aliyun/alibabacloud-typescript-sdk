// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGroupSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The text content. This field is used for the CONTENT preview type.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the preview is degraded to a download, meaning the resource cannot be opened in the online previewer. Valid values:
   * - true: The preview is degraded to a download.
   * - false: The resource can be previewed online.
   */
  degraded?: boolean;
  /**
   * @remarks
   * The file name extension. This field is used for the OSS_IMM preview type.
   * 
   * @example
   * string_value
   */
  fileExt?: string;
  /**
   * @remarks
   * The file name. This field is used for the OSS_IMM preview type.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The preview type. Valid values: OSS_IMM, IMAGE, AUDIO, VIDEO, HTML, DING_TALK, VOICE_MEETING, and CONTENT.
   * 
   * @example
   * OSS_IMM
   */
  previewType?: string;
  /**
   * @remarks
   * The preview URL. This field is used for the OSS_IMM, DING_TALK, and VOICE_MEETING preview types.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  previewUrl?: string;
  /**
   * @remarks
   * The public download URL of the file.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  publicUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      degraded: 'degraded',
      fileExt: 'fileExt',
      fileName: 'fileName',
      message: 'message',
      previewType: 'previewType',
      previewUrl: 'previewUrl',
      publicUrl: 'publicUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      degraded: 'boolean',
      fileExt: 'string',
      fileName: 'string',
      message: 'string',
      previewType: 'string',
      previewUrl: 'string',
      publicUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


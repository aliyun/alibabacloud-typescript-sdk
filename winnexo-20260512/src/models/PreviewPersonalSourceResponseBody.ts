// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewPersonalSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The text content. This parameter is used for the CONTENT type.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The file name extension. This parameter is used for the OSS_IMM type.
   * 
   * @example
   * string_value
   */
  fileExt?: string;
  /**
   * @remarks
   * The file name. This parameter is used for the OSS_IMM type.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The status code description.
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
   * The preview URL. This parameter is used for the OSS_IMM, DING_TALK, and VOICE_MEETING types.
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
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
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


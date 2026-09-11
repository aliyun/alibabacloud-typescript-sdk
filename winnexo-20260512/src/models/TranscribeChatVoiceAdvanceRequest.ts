// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class TranscribeChatVoiceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the file. Valid values:
   * - **image**: Image.
   * - **document**: General document.
   * - **alidoc**: Alibaba Cloud document.
   * - **text**: Text.
   * - **video**: Video.
   * - **audio**: Audio.
   * - **archive**: Archive.
   * - **app**: Application.
   * - **link**: Shortcut.
   * - **other**: Other.
   * 
   * @example
   * audio/mpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The full path name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * meeting.mp3
   */
  fileName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the attachment.
   * 
   * This parameter is required.
   * 
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-09-08/9f8c2a1b
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * The ID of the tenant for which the operation takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


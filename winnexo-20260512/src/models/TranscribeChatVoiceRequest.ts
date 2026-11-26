// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscribeChatVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The content type of the file. Valid values:
   * - **image**: Image.
   * - **document**: General document.
   * - **alidoc**: AliDoc.
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
   * The standard Base64-encoded audio content, excluding the data URI prefix. This parameter and FileUrl are mutually exclusive.
   * 
   * @example
   * UklGRg==
   */
  fileContentBase64?: string;
  /**
   * @remarks
   * The full path and name of the file.
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
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-09-08/9f8c2a1b
   */
  fileUrl?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      contentType: 'contentType',
      fileContentBase64: 'fileContentBase64',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      contentType: 'string',
      fileContentBase64: 'string',
      fileName: 'string',
      fileUrl: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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


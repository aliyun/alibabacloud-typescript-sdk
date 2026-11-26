// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadChatFileRequest extends $dara.Model {
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
   * 
   * - **image**: Image.
   * - **document**: General document.
   * - **alidoc**: Alibaba document.
   * - **text**: Text.
   * - **video**: Video.
   * - **audio**: Audio.
   * - **archive**: Archive.
   * - **app**: Application.
   * - **link**: Shortcut.
   * - **other**: Other.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The full path name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The Yida attachment address.
   * 
   * This parameter is required.
   * 
   * @example
   * http://winnexo-file-transfer.oss-cn-hangzhou.aliyuncs.com/openapi/2026-08-06/9f8c2a1b
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name). This parameter is optional.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
   * The tenant ID that takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      contentType: 'contentType',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      contentType: 'string',
      fileName: 'string',
      fileUrl: 'string',
      operatingObjectName: 'string',
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


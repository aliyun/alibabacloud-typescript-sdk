// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanSbomExportResponseBody extends $dara.Model {
  /**
   * @remarks
   * 短时签名的 GET URL（有效期见 **`url_expires_at`**），对象上已带 Content-Disposition
   * 
   * @example
   * https://krypton-codesafe.oss-cn-hangzhou.aliyuncs.com/1609837153086803%2F1000108%2F1000893%2F1001080%2Fartifacts%2Fcyclonedx-json%2F1f8dc54097780e9c32941289d2aff5161df694b5bfb2d0aa3fe87fe72a751363.cdx.json?Expires=1789713461&OSSAccessKeyId=STS.NYDdfgGGhFqA4XBNu2EQebMeV&Signature=pnZPAML9CPKOIDyC4b1DK6gQmhs%3D&response-content-disposition=attachment%3B%20filename%3D%22test-sbom-cyclonedx.cdx.json%22%3B%20filename%2A%3DUTF-8%27%27test-sbom-cyclonedx.cdx.json&security-token=CAIS*
   */
  downloadUrl?: string;
  /**
   * @remarks
   * 最终生效的文件名（客户端指定或后端默认），已签进 **`download_url`** 的 **`Content-Disposition`**， 浏览器直连下载即按此落盘。
   * 
   * @example
   * test-sbom-cyclonedx.cdx.json
   */
  fileName?: string;
  /**
   * @example
   * cyclonedx-json
   */
  format?: string;
  /**
   * @remarks
   * 交付文件 MIME 类型
   * 
   * @example
   * application/vnd.cyclonedx+json
   */
  mediaType?: string;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * 交付文件本身（注入后重算）的摘要，供下载完整性校验；与源制品的 sha256 不同
   * 
   * @example
   * 1f8dc54097780e9c32941289d2aff5161df694b5bfb2d0aa3fe87fe72a751363
   */
  sha256?: string;
  /**
   * @remarks
   * 交付文件字节数
   * 
   * @example
   * 791355
   */
  sizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      fileName: 'fileName',
      format: 'format',
      mediaType: 'mediaType',
      requestId: 'requestId',
      sha256: 'sha256',
      sizeBytes: 'sizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileName: 'string',
      format: 'string',
      mediaType: 'string',
      requestId: 'string',
      sha256: 'string',
      sizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


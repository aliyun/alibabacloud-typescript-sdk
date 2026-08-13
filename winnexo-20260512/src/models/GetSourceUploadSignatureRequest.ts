// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * 文件 Content-Type（可选，不传则自动推断）
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * 签名 URL 过期时间（秒），默认 3600
   * 
   * @example
   * 3600
   */
  expires?: number;
  /**
   * @remarks
   * 文件名（含后缀，如 report.pdf）
   * 
   * This parameter is required.
   * 
   * @example
   * example.pdf
   */
  filename?: string;
  /**
   * @remarks
   * Agent 命名空间标识（数字员工名称）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 数据源归属范围: source（个人数据源，映射 PERSONAL）/ knowledge（企业知识库，映射 TENANT）
   * 
   * @example
   * source
   */
  scope?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      expires: 'expires',
      filename: 'filename',
      operatingObjectName: 'operatingObjectName',
      scope: 'scope',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      expires: 'number',
      filename: 'string',
      operatingObjectName: 'string',
      scope: 'string',
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


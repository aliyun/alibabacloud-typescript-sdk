// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNacosConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * This parameter is required.
   * 
   * @example
   * http://mse-shared.oss-xxx.aliyuncs.com/cfg/import/xxxx/2021/01/11/xxxx.zip
   */
  fileUrl?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The policy.
   * 
   * @example
   * f5cdc80a-****-8094-282f5650fc00
   */
  namespaceId?: string;
  /**
   * @remarks
   * The policy.
   * 
   * Valid values:
   * 
   * *   ABORT
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OVERWRITE
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   SKIP
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * overwrite
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fileUrl: 'FileUrl',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fileUrl: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


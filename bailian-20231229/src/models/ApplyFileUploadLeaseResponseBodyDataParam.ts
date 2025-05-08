// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFileUploadLeaseResponseBodyDataParam extends $dara.Model {
  /**
   * @remarks
   * The key-value pair to be placed in the Header. Both the key and the value are strings.
   * 
   * @example
   * "X-bailian-extra": "MTAwNTQyNjQ5NTE2OTE3OA==",
   *         "Content-Type": "application/pdf"
   */
  headers?: any;
  /**
   * @remarks
   * The HTTP call method. Valid values:
   * 
   * *   PUT
   * *   POST
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * The upload URL of the document.
   * 
   * @example
   * https://bailian-datahub-data-origin-prod.oss-cn-hangzhou.aliyuncs.com/1005426495169178/10024405/68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847.pdf?Expires=1716699536&OSSAccessKeyId=TestID&Signature=HfwPUZo4pR6DatSDym0zFKVh9Wg%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'any',
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


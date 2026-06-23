// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvWithHighCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * The key name to set. The key name can be up to 512 characters in length and cannot contain spaces or backslashes (/).
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The name specified when you called the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namesapce
   */
  namespace?: string;
  /**
   * @remarks
   * A publicly accessible HTTP or HTTPS URL that points to a JSON file containing the key-value pair to set. The server actively downloads the content from this URL.
   * 
   * - If you use an SDK, the SDK automatically uploads the file and generates the URL.
   * 
   * - In non-SDK scenarios, upload the JSON payload to any publicly accessible HTTP service and specify the URL.
   * 
   * The file content pointed to by the URL must be in the following JSON format: {"Namespace":"<namespace>","Key":"<key>","Value":"<value>"}.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-region.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
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


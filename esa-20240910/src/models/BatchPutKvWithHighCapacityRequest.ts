// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvWithHighCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace name specified when you called [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * A publicly accessible HTTP(S) URL that points to a JSON file containing the key-value pairs to be batch set. The server actively downloads the content from this URL.
   * 
   * - If you use an SDK, the SDK automatically uploads the file and generates the URL.
   * 
   * - In non-SDK scenarios, upload the JSON payload to any publicly accessible HTTP service and specify the URL.
   * 
   * The file content pointed to by the URL must be in the following JSON format: {"Namespace":"<namespace name>","KvList":[{"Key":"<key>","Value":"<value>"},...]}.If the URL content does not match this format, the API silently returns an empty SuccessKeys array.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-region.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


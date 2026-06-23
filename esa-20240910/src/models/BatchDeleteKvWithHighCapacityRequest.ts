// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvWithHighCapacityRequest extends $dara.Model {
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
   * The download URL that contains the key-value pairs to be batch deleted, such as an OSS download URL with read permissions.
   * 
   * - When you call this operation by using the SDK, the SDK automatically uploads the content to OSS and passes the corresponding URL.
   * 
   * - To call this operation directly, upload the JSON payload (in the same format as the BatchDeleteKv body: {"Namespace":"...","Keys":[...]}) to an OSS bucket and generate a signed HTTPS GET URL.
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


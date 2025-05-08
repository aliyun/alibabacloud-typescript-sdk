// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvWithHighCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * The key name. The name can be up to 512 characters in length and cannot contain spaces or backslashes (\\\\).
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The name of the namespace that you specify when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namesapce
   */
  namespace?: string;
  /**
   * @remarks
   * The download URL of the key-value pair that you want to upload. This parameter is automatically filled in when you use the SDK to call the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
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


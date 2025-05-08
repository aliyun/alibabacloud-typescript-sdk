// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvWithHighCapacityAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace that you specify when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The download URL of the key-value pairs that you want to delete. This parameter is automatically filled in when you use the SDK to call the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      urlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


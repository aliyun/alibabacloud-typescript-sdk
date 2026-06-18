// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to Base64-decode the value. If you set the base64 parameter to true when you called the [PutKv](https://help.aliyun.com/document_detail/2850482.html) operation, set this parameter to true to read the original content.
   * 
   * @example
   * true
   */
  base64?: boolean;
  /**
   * @remarks
   * The name of the key to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The name specified when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      key: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


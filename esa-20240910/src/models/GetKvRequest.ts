// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to decode the value by using Base 64. If you call the [PutKv](https://help.aliyun.com/document_detail/2850482.html) operation and set the Base64 parameter to true, set this parameter to true to read the original content.
   * 
   * @example
   * true
   */
  base64?: boolean;
  /**
   * @remarks
   * The key name for the query.
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


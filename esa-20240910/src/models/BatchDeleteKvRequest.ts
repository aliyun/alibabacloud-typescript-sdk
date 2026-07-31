// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvRequest extends $dara.Model {
  /**
   * @remarks
   * The list of key names to delete in batch. A maximum of 10,000 keys can be deleted.
   * 
   * This parameter is required.
   */
  keys?: string[];
  /**
   * @remarks
   * The name specified when calling [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs that you want to configure at a time. The total size can be up to 2 MB (2 × 1000 × 1000).
   * 
   * This parameter is required.
   */
  kvListShrink?: string;
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
      kvListShrink: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListShrink: 'string',
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


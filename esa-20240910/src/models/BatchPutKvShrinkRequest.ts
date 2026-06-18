// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of key-value pairs to set. The total size cannot exceed 2 MB (2 × 1,000 × 1,000).
   * 
   * This parameter is required.
   */
  kvListShrink?: string;
  /**
   * @remarks
   * The name specified when you call [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html).
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of key names to delete in batch. A maximum of 10,000 keys can be deleted.
   * 
   * This parameter is required.
   */
  keysShrink?: string;
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
      keysShrink: 'Keys',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
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


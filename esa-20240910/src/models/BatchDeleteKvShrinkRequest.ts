// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The keys that you want to delete. You can delete a maximum of 10,000 key-value pairs at a time.
   * 
   * This parameter is required.
   */
  keysShrink?: string;
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


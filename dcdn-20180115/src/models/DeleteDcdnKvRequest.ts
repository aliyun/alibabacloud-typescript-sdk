// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnKvRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test_key_1
   */
  key?: string;
  /**
   * @remarks
   * The namespace that you specify when you call the PutDcdnKvNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


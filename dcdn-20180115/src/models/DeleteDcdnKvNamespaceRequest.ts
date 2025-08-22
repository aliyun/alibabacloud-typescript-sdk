// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnKvNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace. You can call the [PutDcdnKvNamespace](~~PutDcdnKvNamespace~~) operation to query the name of a namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


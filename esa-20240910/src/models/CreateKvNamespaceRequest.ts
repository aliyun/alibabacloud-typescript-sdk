// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKvNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * this is a test namespace.
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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


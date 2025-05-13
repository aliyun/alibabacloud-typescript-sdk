// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * doc
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  UId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      UId: 'UId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      UId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


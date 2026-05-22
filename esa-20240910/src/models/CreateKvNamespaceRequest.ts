// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKvNamespaceRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
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


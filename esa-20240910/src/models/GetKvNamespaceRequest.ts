// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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


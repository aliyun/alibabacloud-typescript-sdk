// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistryNamespaceAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @example
   * CA5C5B39-D1DC-5309-8E97-B9A91DA21094
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceName: 'namespaceName',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistryNamespaceResponseBody extends $dara.Model {
  /**
   * @example
   * iac
   */
  namespaceName?: string;
  /**
   * @example
   * B4672AE3-C313-5B7A-BB24-45345570D398
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


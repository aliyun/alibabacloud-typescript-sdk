// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegistryNamespaceResponseBody extends $dara.Model {
  /**
   * @example
   * 1D0CD708-E433-5F13-8A42-823C95FC756C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


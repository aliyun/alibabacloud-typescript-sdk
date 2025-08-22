// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRegistryModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 36E1679B-4D91-5AF6-B505-B5D4ACDF75BD
   */
  requestId?: string;
  /**
   * @example
   * 1.1.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


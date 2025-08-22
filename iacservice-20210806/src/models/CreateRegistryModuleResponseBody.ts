// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistryModuleResponseBody extends $dara.Model {
  /**
   * @example
   * C896FE0A-1BEA-5D01-BFF4-B03B82B9CA3D
   */
  requestId?: string;
  /**
   * @example
   * test_namespace/RegistryModule-test
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegistryModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 491A1E2E-EA1E-5F90-958A-A53EB67780FC
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


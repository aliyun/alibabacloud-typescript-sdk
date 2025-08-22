// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegistryModuleResponseBody extends $dara.Model {
  /**
   * @example
   * 545995A8-243D-5963-A940-B74FAF6009B5
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRAMDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The RAM directory ID.
   * 
   * @example
   * dri-uf62w3qzt4aigvlcb****
   */
  directoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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


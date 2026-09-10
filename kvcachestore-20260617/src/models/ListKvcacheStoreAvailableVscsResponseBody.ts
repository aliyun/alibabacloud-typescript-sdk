// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAvailableVscsResponseBodyVscs extends $dara.Model {
  /**
   * @remarks
   * The ID of the VSC device.
   * 
   * @example
   * vsc-xxxxx
   */
  vscId?: string;
  /**
   * @remarks
   * The current status of the VSC device.
   * 
   * @example
   * Available
   */
  vscStatus?: string;
  static names(): { [key: string]: string } {
    return {
      vscId: 'VscId',
      vscStatus: 'VscStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vscId: 'string',
      vscStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoreAvailableVscsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The list of available VSC resources.
   */
  vscs?: ListKVCacheStoreAvailableVscsResponseBodyVscs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vscs: 'Vscs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vscs: { 'type': 'array', 'itemType': ListKVCacheStoreAvailableVscsResponseBodyVscs },
    };
  }

  validate() {
    if(Array.isArray(this.vscs)) {
      $dara.Model.validateArray(this.vscs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


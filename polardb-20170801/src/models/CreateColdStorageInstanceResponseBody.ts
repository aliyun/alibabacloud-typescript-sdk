// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateColdStorageInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pcs_2zeth2gf4i83e578t
   */
  coldStorageInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6EBB4ED-D12F-5F49-824C-9DD9C0EC4CF2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorageInstanceId: 'ColdStorageInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageInstanceId: 'string',
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


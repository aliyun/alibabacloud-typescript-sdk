// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpChangeWarmupTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated IP address.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The prefetch method.
   * 
   * @example
   * sysCusStream
   */
  warmupType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      warmupType: 'WarmupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      warmupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateFuncSwitchRecordRequestParamsArgs } from "./UpdateFuncSwitchRecordRequestParamsArgs";


export class UpdateFuncSwitchRecordRequestParams extends $dara.Model {
  args?: UpdateFuncSwitchRecordRequestParamsArgs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @example
   * restart
   */
  op?: string;
  region?: string;
  /**
   * @example
   * 1664516888213680
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      functionName: 'function_name',
      instance: 'instance',
      op: 'op',
      region: 'region',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: UpdateFuncSwitchRecordRequestParamsArgs,
      functionName: 'string',
      instance: 'string',
      op: 'string',
      region: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.args && typeof (this.args as any).validate === 'function') {
      (this.args as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


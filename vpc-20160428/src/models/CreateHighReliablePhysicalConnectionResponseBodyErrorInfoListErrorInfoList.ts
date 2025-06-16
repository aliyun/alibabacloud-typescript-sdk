// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList extends $dara.Model {
  /**
   * @remarks
   * Error codes.
   * 
   * @example
   * pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-j5e5qqo616p81ncspbll1
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


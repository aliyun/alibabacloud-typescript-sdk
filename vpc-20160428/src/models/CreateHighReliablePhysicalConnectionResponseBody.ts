// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList } from "./CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList";
import { CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList } from "./CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList";


export class CreateHighReliablePhysicalConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the request fails the dry run, the following error codes and error messages may be returned:
   * 
   * - pconn.high.reliable.dryrun.error.disable.outbound.data.transfer.billing. Billing for outbound data transfer is not enabled.
   * - pconn.high.reliable.dryrun.error.incompatable.device.capacity. No device in the access point supports advanced features.
   * - pconn.high.reliable.dryrun.error.quota.exceeded. The quota is insufficient.
   * - pconn.high.reliable.dryrun.error.not.enough.resource. The access point resources are insufficient.
   */
  errorInfoList?: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList;
  /**
   * @remarks
   * The Express Connect circuits.
   */
  physicalConnectionList?: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfoList: 'ErrorInfoList',
      physicalConnectionList: 'PhysicalConnectionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfoList: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList,
      physicalConnectionList: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.errorInfoList && typeof (this.errorInfoList as any).validate === 'function') {
      (this.errorInfoList as any).validate();
    }
    if(this.physicalConnectionList && typeof (this.physicalConnectionList as any).validate === 'function') {
      (this.physicalConnectionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels } from "./BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels";


export class BatchGetAcpConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the instance connection tasks.
   */
  instanceConnectionModels?: BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConnectionModels: 'InstanceConnectionModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConnectionModels: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketResponseBodyInstanceConnectionModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceConnectionModels)) {
      $dara.Model.validateArray(this.instanceConnectionModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


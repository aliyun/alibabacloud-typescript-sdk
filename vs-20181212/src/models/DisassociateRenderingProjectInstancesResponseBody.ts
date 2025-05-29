// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DisassociateRenderingProjectInstancesResponseBodyFailedInstances } from "./DisassociateRenderingProjectInstancesResponseBodyFailedInstances";
import { DisassociateRenderingProjectInstancesResponseBodySuccessInstances } from "./DisassociateRenderingProjectInstancesResponseBodySuccessInstances";


export class DisassociateRenderingProjectInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  failedInstanceCount?: string;
  failedInstances?: DisassociateRenderingProjectInstancesResponseBodyFailedInstances[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  successInstanceCount?: string;
  successInstances?: DisassociateRenderingProjectInstancesResponseBodySuccessInstances[];
  static names(): { [key: string]: string } {
    return {
      failedInstanceCount: 'FailedInstanceCount',
      failedInstances: 'FailedInstances',
      requestId: 'RequestId',
      successInstanceCount: 'SuccessInstanceCount',
      successInstances: 'SuccessInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstanceCount: 'string',
      failedInstances: { 'type': 'array', 'itemType': DisassociateRenderingProjectInstancesResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'string',
      successInstances: { 'type': 'array', 'itemType': DisassociateRenderingProjectInstancesResponseBodySuccessInstances },
    };
  }

  validate() {
    if(Array.isArray(this.failedInstances)) {
      $dara.Model.validateArray(this.failedInstances);
    }
    if(Array.isArray(this.successInstances)) {
      $dara.Model.validateArray(this.successInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


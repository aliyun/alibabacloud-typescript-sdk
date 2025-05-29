// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssociateRenderingProjectInstancesResponseBodyFailedInstances } from "./AssociateRenderingProjectInstancesResponseBodyFailedInstances";
import { AssociateRenderingProjectInstancesResponseBodySuccessInstances } from "./AssociateRenderingProjectInstancesResponseBodySuccessInstances";


export class AssociateRenderingProjectInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  failedInstanceCount?: string;
  failedInstances?: AssociateRenderingProjectInstancesResponseBodyFailedInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  successInstanceCount?: string;
  successInstances?: AssociateRenderingProjectInstancesResponseBodySuccessInstances[];
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
      failedInstances: { 'type': 'array', 'itemType': AssociateRenderingProjectInstancesResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'string',
      successInstances: { 'type': 'array', 'itemType': AssociateRenderingProjectInstancesResponseBodySuccessInstances },
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


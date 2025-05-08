// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceQuotasResponseBodyQuotas } from "./ListInstanceQuotasResponseBodyQuotas";


export class ListInstanceQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The quotas in the plan.
   */
  quotas?: ListInstanceQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  /**
   * @remarks
   * The plan status. Valid values:
   * 
   * *   online: The plan is in service.
   * *   offline: The plan has expired within an allowable period. In this state, the plan is unavailable.
   * *   disable: The plan is released.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


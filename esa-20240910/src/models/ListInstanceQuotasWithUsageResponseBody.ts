// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceQuotasWithUsageResponseBodyQuotas } from "./ListInstanceQuotasWithUsageResponseBodyQuotas";


export class ListInstanceQuotasWithUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan ID.[](~~2850189~~)
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The quotas and their actual usage in the plan.
   */
  quotas?: ListInstanceQuotasWithUsageResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
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
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotas },
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


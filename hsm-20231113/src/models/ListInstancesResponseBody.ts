// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The HSM status. Valid values:
   * 
   * *   PENDING: The HSM is disabled.
   * *   ACTIVE: The HSM is enabled.
   * *   EXPIRED: The HSM expired.
   * *   INVALID: The HSM is invalid.
   * *   FAILURE: The HSM failed to be created.
   * *   RESET: The HSM is being reset.
   * *   PAUSED: The HSM is paused.
   * *   MODIFYING: The HSM is being modified.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The HSMs.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 80
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instances: 'Instances',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


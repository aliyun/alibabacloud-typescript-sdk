// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMigrationTaskRequestVirtualServices extends $dara.Model {
  /**
   * @remarks
   * The port. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Required for CLB.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * CLB VServerGroupId / NLB ServerGroupId
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * 80-tcp
   */
  virtualServiceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      virtualServiceGroupId: 'virtualServiceGroupId',
      virtualServiceGroupName: 'virtualServiceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      virtualServiceGroupId: 'string',
      virtualServiceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace of the source cluster (for SLB traffic switching).
   * 
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @remarks
   * The task description. For DNS-based Engine updates, only this field is modified.
   * 
   * @example
   * Migration test
   */
  description?: string;
  /**
   * @remarks
   * The SLB service name.
   * 
   * @example
   * nginx-ingress-lb
   */
  serviceName?: string;
  /**
   * @remarks
   * The SLB instance ID. Required when the task is in the Initial state with SLB traffic switching. The type is determined by the prefix (lb- or nlb-).
   * 
   * @example
   * lb-bp1xxxx
   */
  slbId?: string;
  /**
   * @remarks
   * The traffic switching method. Required when advancing from the Initial state.
   * 
   * @example
   * SLB
   */
  switchType?: string;
  /**
   * @remarks
   * Required. The update target. Determines whether to advance the task status or perform an engine operation.
   * 
   * @example
   * Task
   */
  target?: string;
  /**
   * @remarks
   * The list of backend server group bindings.
   */
  virtualServices?: UpdateMigrationTaskRequestVirtualServices[];
  /**
   * @remarks
   * The traffic switching weight for the legacy flow. Valid values: 0 to 100. Takes effect when the target is set to Engine.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clusterNamespace: 'clusterNamespace',
      description: 'description',
      serviceName: 'serviceName',
      slbId: 'slbId',
      switchType: 'switchType',
      target: 'target',
      virtualServices: 'virtualServices',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNamespace: 'string',
      description: 'string',
      serviceName: 'string',
      slbId: 'string',
      switchType: 'string',
      target: 'string',
      virtualServices: { 'type': 'array', 'itemType': UpdateMigrationTaskRequestVirtualServices },
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.virtualServices)) {
      $dara.Model.validateArray(this.virtualServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


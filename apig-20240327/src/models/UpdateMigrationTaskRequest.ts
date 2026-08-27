// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMigrationTaskRequestVirtualServices extends $dara.Model {
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
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
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @example
   * 迁移测试
   */
  description?: string;
  /**
   * @example
   * nginx-ingress-lb
   */
  serviceName?: string;
  /**
   * @example
   * lb-bp1xxxx
   */
  slbId?: string;
  /**
   * @example
   * SLB
   */
  switchType?: string;
  /**
   * @example
   * Task
   */
  target?: string;
  virtualServices?: UpdateMigrationTaskRequestVirtualServices[];
  /**
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


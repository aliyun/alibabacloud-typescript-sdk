// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceInspectionRequestItems extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"lookback":"1h","consumerDelayThresholdSeconds":600}
   */
  parameters?: any;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'any',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInspectionRequestResourceScope extends $dara.Model {
  /**
   * @example
   * ["orders-g1"]
   */
  consumerGroups?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All
   */
  mode?: string;
  /**
   * @example
   * ["orders"]
   */
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      consumerGroups: 'consumerGroups',
      mode: 'mode',
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroups: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInspectionRequestSchedule extends $dara.Model {
  /**
   * @example
   * 0 3 * * *
   */
  cron?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInspectionRequest extends $dara.Model {
  /**
   * @remarks
   * 同一实例配置生命周期内有效 24 小时；同 token 同请求返回首次成功结果，不同请求返回冲突。新请求仍须携带当前 revision。
   * 
   * This parameter is required.
   * 
   * @example
   * update-inspection-1
   */
  clientToken?: string;
  /**
   * @example
   * [{"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}},{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  items?: UpdateInstanceInspectionRequestItems[];
  /**
   * @example
   * {"mode":"All"}
   */
  resourceScope?: UpdateInstanceInspectionRequestResourceScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @example
   * {"enabled":true,"cron":"0 3 * * *"}
   */
  schedule?: UpdateInstanceInspectionRequestSchedule;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      items: 'items',
      resourceScope: 'resourceScope',
      revision: 'revision',
      schedule: 'schedule',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      items: { 'type': 'array', 'itemType': UpdateInstanceInspectionRequestItems },
      resourceScope: UpdateInstanceInspectionRequestResourceScope,
      revision: 'number',
      schedule: UpdateInstanceInspectionRequestSchedule,
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.resourceScope && typeof (this.resourceScope as any).validate === 'function') {
      (this.resourceScope as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


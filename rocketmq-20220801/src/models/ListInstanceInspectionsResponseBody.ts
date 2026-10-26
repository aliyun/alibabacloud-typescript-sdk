// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInspectionsResponseBodyDataConfigItems extends $dara.Model {
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

export class ListInstanceInspectionsResponseBodyDataConfigResourceScope extends $dara.Model {
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

export class ListInstanceInspectionsResponseBodyDataConfigSchedule extends $dara.Model {
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

export class ListInstanceInspectionsResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}},{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  items?: ListInstanceInspectionsResponseBodyDataConfigItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"mode":"All"}
   */
  resourceScope?: ListInstanceInspectionsResponseBodyDataConfigResourceScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"enabled":true,"cron":"0 3 * * *"}
   */
  schedule?: ListInstanceInspectionsResponseBodyDataConfigSchedule;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      resourceScope: 'resourceScope',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListInstanceInspectionsResponseBodyDataConfigItems },
      resourceScope: ListInstanceInspectionsResponseBodyDataConfigResourceScope,
      schedule: ListInstanceInspectionsResponseBodyDataConfigSchedule,
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

export class ListInstanceInspectionsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 检查消费延迟和消费健康度
   */
  description?: string;
  /**
   * @example
   * 消费健康巡检
   */
  name?: string;
  /**
   * @example
   * 3
   */
  resourceCount?: number;
  /**
   * @example
   * ["ConsumerGroup"]
   */
  resourceTypes?: string[];
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      resourceCount: 'resourceCount',
      resourceTypes: 'resourceTypes',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      resourceCount: 'number',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: ListInstanceInspectionsResponseBodyDataConfig;
  /**
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @example
   * rmq-cn-example
   */
  instanceId?: string;
  /**
   * @example
   * []
   */
  items?: ListInstanceInspectionsResponseBodyDataItems[];
  /**
   * @example
   * 2026-09-09T03:00:00+08:00
   */
  nextRunAt?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configured: 'configured',
      instanceId: 'instanceId',
      items: 'items',
      nextRunAt: 'nextRunAt',
      regionId: 'regionId',
      revision: 'revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListInstanceInspectionsResponseBodyDataConfig,
      configured: 'boolean',
      instanceId: 'string',
      items: { 'type': 'array', 'itemType': ListInstanceInspectionsResponseBodyDataItems },
      nextRunAt: 'string',
      regionId: 'string',
      revision: 'number',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionsResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ListInstanceInspectionsResponseBodyData[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstanceInspectionsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


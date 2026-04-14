// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkServicesResponseBodyNetworkServicesStateChangeReason extends $dara.Model {
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * message
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkServicesResponseBodyNetworkServices extends $dara.Model {
  /**
   * @example
   * vpc_test
   */
  name?: string;
  /**
   * @example
   * ns-d7a1d02045fb****
   */
  networkServiceId?: string;
  /**
   * @example
   * running
   */
  state?: string;
  stateChangeReason?: ListNetworkServicesResponseBodyNetworkServicesStateChangeReason;
  /**
   * @example
   * NetworkService
   */
  type?: string;
  /**
   * @remarks
   * VPC id。
   * 
   * @example
   * vpc-bp1vt6r7o1w4tw7j6****
   */
  vpcId?: string;
  vswitchIds?: string[];
  /**
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      networkServiceId: 'networkServiceId',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      type: 'type',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      networkServiceId: 'string',
      state: 'string',
      stateChangeReason: ListNetworkServicesResponseBodyNetworkServicesStateChangeReason,
      type: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkServicesResponseBodyQueuesStateChangeReason extends $dara.Model {
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * message
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkServicesResponseBodyQueues extends $dara.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ns-d7a1d02045fb****
   */
  networkServiceId?: string;
  /**
   * @example
   * running
   */
  state?: string;
  stateChangeReason?: ListNetworkServicesResponseBodyQueuesStateChangeReason;
  /**
   * @example
   * NetworkService
   */
  type?: string;
  /**
   * @example
   * vpc-uf6k2anfa9nzbm4cj****
   */
  vpcId?: string;
  vswitchIds?: string[];
  /**
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      networkServiceId: 'networkServiceId',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      type: 'type',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      networkServiceId: 'string',
      state: 'string',
      stateChangeReason: ListNetworkServicesResponseBodyQueuesStateChangeReason,
      type: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 一次获取的最大记录数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  networkServices?: ListNetworkServicesResponseBodyNetworkServices[];
  /**
   * @remarks
   * 下一页TOKEN。
   * 
   * @example
   * 1
   */
  nextToken?: string;
  queues?: ListNetworkServicesResponseBodyQueues[];
  /**
   * @example
   * 18C7775A-7995-128A-A10C-9116EA87****
   */
  requestId?: string;
  /**
   * @remarks
   * 记录总数。
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      networkServices: 'networkServices',
      nextToken: 'nextToken',
      queues: 'queues',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      networkServices: { 'type': 'array', 'itemType': ListNetworkServicesResponseBodyNetworkServices },
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListNetworkServicesResponseBodyQueues },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkServices)) {
      $dara.Model.validateArray(this.networkServices);
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


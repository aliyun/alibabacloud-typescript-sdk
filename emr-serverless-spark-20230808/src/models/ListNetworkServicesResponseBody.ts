// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkServicesResponseBodyNetworkServicesStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The message that provides details about the state change.
   * 
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
   * @remarks
   * The name of the network connection.
   * 
   * @example
   * vpc_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the network connection.
   * 
   * @example
   * ns-d7a1d02045fb****
   */
  networkServiceId?: string;
  /**
   * @remarks
   * The state of the network connection.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The reason for the state change.
   */
  stateChangeReason?: ListNetworkServicesResponseBodyNetworkServicesStateChangeReason;
  /**
   * @remarks
   * The type of the network connection.
   * 
   * @example
   * NetworkService
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1vt6r7o1w4tw7j6****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * The ID of the workspace.
   * 
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
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
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
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * ns-d7a1d02045fb****
   */
  networkServiceId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  stateChangeReason?: ListNetworkServicesResponseBodyQueuesStateChangeReason;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * NetworkService
   */
  type?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * vpc-uf6k2anfa9nzbm4cj****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  vswitchIds?: string[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
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
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A list of network connections.
   */
  networkServices?: ListNetworkServicesResponseBodyNetworkServices[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  queues?: ListNetworkServicesResponseBodyQueues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18C7775A-7995-128A-A10C-9116EA87****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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


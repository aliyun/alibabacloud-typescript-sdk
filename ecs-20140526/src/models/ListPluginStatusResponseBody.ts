// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus extends $dara.Model {
  firstHeartbeatTime?: string;
  lastHeartbeatTime?: string;
  pluginName?: string;
  pluginStatus?: string;
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      firstHeartbeatTime: 'FirstHeartbeatTime',
      lastHeartbeatTime: 'LastHeartbeatTime',
      pluginName: 'PluginName',
      pluginStatus: 'PluginStatus',
      pluginVersion: 'PluginVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstHeartbeatTime: 'string',
      lastHeartbeatTime: 'string',
      pluginName: 'string',
      pluginStatus: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet extends $dara.Model {
  pluginStatus?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus[];
  static names(): { [key: string]: string } {
    return {
      pluginStatus: 'PluginStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginStatus: { 'type': 'array', 'itemType': ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSetPluginStatus },
    };
  }

  validate() {
    if(Array.isArray(this.pluginStatus)) {
      $dara.Model.validateArray(this.pluginStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus extends $dara.Model {
  instanceId?: string;
  pluginStatusSet?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pluginStatusSet: 'PluginStatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pluginStatusSet: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet,
    };
  }

  validate() {
    if(this.pluginStatusSet && typeof (this.pluginStatusSet as any).validate === 'function') {
      (this.pluginStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginStatusResponseBodyInstancePluginStatusSet extends $dara.Model {
  instancePluginStatus?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus[];
  static names(): { [key: string]: string } {
    return {
      instancePluginStatus: 'InstancePluginStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePluginStatus: { 'type': 'array', 'itemType': ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instancePluginStatus)) {
      $dara.Model.validateArray(this.instancePluginStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginStatusResponseBody extends $dara.Model {
  instancePluginStatusSet?: ListPluginStatusResponseBodyInstancePluginStatusSet;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instancePluginStatusSet: 'InstancePluginStatusSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePluginStatusSet: ListPluginStatusResponseBodyInstancePluginStatusSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instancePluginStatusSet && typeof (this.instancePluginStatusSet as any).validate === 'function') {
      (this.instancePluginStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


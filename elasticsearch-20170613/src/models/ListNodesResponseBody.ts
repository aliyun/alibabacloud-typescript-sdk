// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResultIpAddress extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * *   public: public IP address
   * *   private: private IP address
   * 
   * @example
   * public
   */
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      ipType: 'ipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      ipType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * abc
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * xyz
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The status of the shipper on the ECS instance. Valid values:
   * 
   * *   heartOk: The heartbeat is normal.
   * *   heartLost: The heartbeat is abnormal.
   * *   uninstalled: The shipper is not installed.
   * *   failed: The shipper fails to be installed.
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * Indicates whether the Cloud Assistant client is installed. Valid values:
   * 
   * *   true: installed
   * *   false: not installed
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp13y63575oypr****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * ECS_beat
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The IP addresses of the ECS instance.
   */
  ipAddress?: ListNodesResponseBodyResultIpAddress[];
  /**
   * @remarks
   * The operating system type of the ECS instance. Valid values:
   * 
   * *   windows: Windows Server
   * *   linux: Linux
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   running: The instance is running.
   * *   starting: The instance is being started.
   * *   stopping: The instance is being stopped.
   * *   stopped: The instance is stopped.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the ECS instance.
   */
  tags?: ListNodesResponseBodyResultTags[];
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      cloudAssistantStatus: 'cloudAssistantStatus',
      ecsInstanceId: 'ecsInstanceId',
      ecsInstanceName: 'ecsInstanceName',
      ipAddress: 'ipAddress',
      osType: 'osType',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      cloudAssistantStatus: 'string',
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListNodesResponseBodyResultIpAddress },
      osType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyResultTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   */
  headers?: ListNodesResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1FD7642-7C40-4FF2-9C0F-21F1A1746F70
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListNodesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListNodesResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


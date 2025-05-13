// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyResultIpAddress } from "./ListNodesResponseBodyResultIpAddress";
import { ListNodesResponseBodyResultTags } from "./ListNodesResponseBodyResultTags";


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


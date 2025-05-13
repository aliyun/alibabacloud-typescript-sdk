// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEcsInstancesResponseBodyResultCollectors } from "./ListEcsInstancesResponseBodyResultCollectors";
import { ListEcsInstancesResponseBodyResultIpAddress } from "./ListEcsInstancesResponseBodyResultIpAddress";


export class ListEcsInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The ID of the collector instance.
   */
  collectors?: ListEcsInstancesResponseBodyResultCollectors[];
  /**
   * @remarks
   * The tags of the ECS instance.
   * 
   * @example
   * i-bp14ncqge8wy3l3d****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * ecsTestName
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The type of the IP address that is used by the instance. Valid values:
   * 
   * *   public: public endpoint
   * *   private: private network address
   */
  ipAddress?: ListEcsInstancesResponseBodyResultIpAddress[];
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   running: The master instance is running
   * *   starting
   * *   stopping: The task is being stopped.
   * *   stopped: The node is stopped.
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The operating system type of the ECS instance. Valid values:
   * 
   * *   windows:Windows operating system
   * *   linux:Linux operating system
   * 
   * @example
   * [ { "tagKey": "a", "tagValue": "b" } ]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'cloudAssistantStatus',
      collectors: 'collectors',
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
      cloudAssistantStatus: 'string',
      collectors: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectors },
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultIpAddress },
      osType: 'string',
      status: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectors)) {
      $dara.Model.validateArray(this.collectors);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


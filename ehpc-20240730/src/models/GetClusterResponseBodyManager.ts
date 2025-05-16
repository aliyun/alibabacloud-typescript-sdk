// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterResponseBodyManagerDNS } from "./GetClusterResponseBodyManagerDns";
import { GetClusterResponseBodyManagerDirectoryService } from "./GetClusterResponseBodyManagerDirectoryService";
import { GetClusterResponseBodyManagerManagerNode } from "./GetClusterResponseBodyManagerManagerNode";
import { GetClusterResponseBodyManagerScheduler } from "./GetClusterResponseBodyManagerScheduler";


export class GetClusterResponseBodyManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: GetClusterResponseBodyManagerDNS;
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryService?: GetClusterResponseBodyManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the management node.
   */
  managerNode?: GetClusterResponseBodyManagerManagerNode;
  /**
   * @remarks
   * The information about the scheduler.
   */
  scheduler?: GetClusterResponseBodyManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: GetClusterResponseBodyManagerDNS,
      directoryService: GetClusterResponseBodyManagerDirectoryService,
      managerNode: GetClusterResponseBodyManagerManagerNode,
      scheduler: GetClusterResponseBodyManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.managerNode && typeof (this.managerNode as any).validate === 'function') {
      (this.managerNode as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


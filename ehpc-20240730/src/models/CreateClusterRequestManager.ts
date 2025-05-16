// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestManagerDNS } from "./CreateClusterRequestManagerDns";
import { CreateClusterRequestManagerDirectoryService } from "./CreateClusterRequestManagerDirectoryService";
import { NodeTemplate } from "./NodeTemplate";
import { CreateClusterRequestManagerScheduler } from "./CreateClusterRequestManagerScheduler";


export class CreateClusterRequestManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: CreateClusterRequestManagerDNS;
  /**
   * @remarks
   * The configurations of the domain account service.
   */
  directoryService?: CreateClusterRequestManagerDirectoryService;
  /**
   * @remarks
   * The hardware configurations of the management node.
   */
  managerNode?: NodeTemplate;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: CreateClusterRequestManagerScheduler;
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
      DNS: CreateClusterRequestManagerDNS,
      directoryService: CreateClusterRequestManagerDirectoryService,
      managerNode: NodeTemplate,
      scheduler: CreateClusterRequestManagerScheduler,
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


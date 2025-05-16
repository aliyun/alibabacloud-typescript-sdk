// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersResponseBodyClustersManagerDNS } from "./ListClustersResponseBodyClustersManagerDns";
import { ListClustersResponseBodyClustersManagerDirectoryService } from "./ListClustersResponseBodyClustersManagerDirectoryService";
import { ListClustersResponseBodyClustersManagerScheduler } from "./ListClustersResponseBodyClustersManagerScheduler";


export class ListClustersResponseBodyClustersManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: ListClustersResponseBodyClustersManagerDNS;
  /**
   * @remarks
   * The configurations of the directory service.
   */
  directoryService?: ListClustersResponseBodyClustersManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: ListClustersResponseBodyClustersManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: ListClustersResponseBodyClustersManagerDNS,
      directoryService: ListClustersResponseBodyClustersManagerDirectoryService,
      scheduler: ListClustersResponseBodyClustersManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ACS } from "./Acs";
import { WorkspaceSpecs } from "./WorkspaceSpecs";
import { UserVpc } from "./UserVpc";


export class QuotaConfig extends $dara.Model {
  ACS?: ACS;
  /**
   * @example
   * ceeb37xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  enablePreemptSubquotaWorkloads?: boolean;
  resourceSpecs?: WorkspaceSpecs[];
  supportGPUDrivers?: string[];
  /**
   * @example
   * false
   */
  supportRDMA?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      enablePreemptSubquotaWorkloads: 'EnablePreemptSubquotaWorkloads',
      resourceSpecs: 'ResourceSpecs',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACS: ACS,
      clusterId: 'string',
      defaultGPUDriver: 'string',
      enablePreemptSubquotaWorkloads: 'boolean',
      resourceSpecs: { 'type': 'array', 'itemType': WorkspaceSpecs },
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.ACS && typeof (this.ACS as any).validate === 'function') {
      (this.ACS as any).validate();
    }
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
    }
    if(Array.isArray(this.supportGPUDrivers)) {
      $dara.Model.validateArray(this.supportGPUDrivers);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


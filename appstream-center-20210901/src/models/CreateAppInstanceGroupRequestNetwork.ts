// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupRequestNetworkDomainRules } from "./CreateAppInstanceGroupRequestNetworkDomainRules";
import { CreateAppInstanceGroupRequestNetworkRoutes } from "./CreateAppInstanceGroupRequestNetworkRoutes";


export class CreateAppInstanceGroupRequestNetwork extends $dara.Model {
  domainRules?: CreateAppInstanceGroupRequestNetworkDomainRules[];
  /**
   * @example
   * 60
   */
  ipExpireMinutes?: number;
  officeSiteId?: string;
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  /**
   * @example
   * Shared
   */
  strategyType?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
      ipExpireMinutes: 'IpExpireMinutes',
      officeSiteId: 'OfficeSiteId',
      routes: 'Routes',
      strategyType: 'StrategyType',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkDomainRules },
      ipExpireMinutes: 'number',
      officeSiteId: 'string',
      routes: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkRoutes },
      strategyType: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainRules)) {
      $dara.Model.validateArray(this.domainRules);
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


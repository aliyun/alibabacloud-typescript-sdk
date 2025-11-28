// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteItem } from "./RouteItem";


export class CreateStorageDomainRoutingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: RouteItem[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      routes: { 'type': 'array', 'itemType': RouteItem },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


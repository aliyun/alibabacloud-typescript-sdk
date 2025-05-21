// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiRouteConflictInfoConflicts } from "./ApiRouteConflictInfoConflicts";
import { ApiRouteConflictInfoDomainInfo } from "./ApiRouteConflictInfoDomainInfo";


export class ApiRouteConflictInfo extends $dara.Model {
  conflicts?: ApiRouteConflictInfoConflicts[];
  domainInfo?: ApiRouteConflictInfoDomainInfo;
  static names(): { [key: string]: string } {
    return {
      conflicts: 'conflicts',
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflicts: { 'type': 'array', 'itemType': ApiRouteConflictInfoConflicts },
      domainInfo: ApiRouteConflictInfoDomainInfo,
    };
  }

  validate() {
    if(Array.isArray(this.conflicts)) {
      $dara.Model.validateArray(this.conflicts);
    }
    if(this.domainInfo && typeof (this.domainInfo as any).validate === 'function') {
      (this.domainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


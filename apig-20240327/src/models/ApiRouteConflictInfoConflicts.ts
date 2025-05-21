// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiRouteConflictInfoConflictsDetails } from "./ApiRouteConflictInfoConflictsDetails";
import { ApiRouteConflictInfoConflictsEnvironmentInfo } from "./ApiRouteConflictInfoConflictsEnvironmentInfo";
import { ApiRouteConflictInfoConflictsRouteInfo } from "./ApiRouteConflictInfoConflictsRouteInfo";


export class ApiRouteConflictInfoConflicts extends $dara.Model {
  details?: ApiRouteConflictInfoConflictsDetails[];
  environmentInfo?: ApiRouteConflictInfoConflictsEnvironmentInfo;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  routeInfo?: ApiRouteConflictInfoConflictsRouteInfo;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      environmentInfo: 'environmentInfo',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      routeInfo: 'routeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ApiRouteConflictInfoConflictsDetails },
      environmentInfo: ApiRouteConflictInfoConflictsEnvironmentInfo,
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      routeInfo: ApiRouteConflictInfoConflictsRouteInfo,
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.routeInfo && typeof (this.routeInfo as any).validate === 'function') {
      (this.routeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


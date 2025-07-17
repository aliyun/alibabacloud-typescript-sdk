// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";


export class ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo extends $dara.Model {
  name?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsConflictingMatch extends $dara.Model {
  match?: HttpRouteMatch;
  operationInfo?: ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      operationInfo: 'operationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpRouteMatch,
      operationInfo: ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo,
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo extends $dara.Model {
  name?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsDetectedMatch extends $dara.Model {
  match?: HttpRouteMatch;
  operationInfo?: ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      operationInfo: 'operationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpRouteMatch,
      operationInfo: ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo,
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetails extends $dara.Model {
  conflictingMatch?: ApiRouteConflictInfoConflictsDetailsConflictingMatch;
  detectedMatch?: ApiRouteConflictInfoConflictsDetailsDetectedMatch;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      conflictingMatch: 'conflictingMatch',
      detectedMatch: 'detectedMatch',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictingMatch: ApiRouteConflictInfoConflictsDetailsConflictingMatch,
      detectedMatch: ApiRouteConflictInfoConflictsDetailsDetectedMatch,
      level: 'string',
    };
  }

  validate() {
    if(this.conflictingMatch && typeof (this.conflictingMatch as any).validate === 'function') {
      (this.conflictingMatch as any).validate();
    }
    if(this.detectedMatch && typeof (this.detectedMatch as any).validate === 'function') {
      (this.detectedMatch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsEnvironmentInfo extends $dara.Model {
  environmentId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsRouteInfo extends $dara.Model {
  name?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ApiRouteConflictInfoDomainInfo extends $dara.Model {
  domainId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiRouteConflictInfoConflictsDetailsConflictingMatch } from "./ApiRouteConflictInfoConflictsDetailsConflictingMatch";
import { ApiRouteConflictInfoConflictsDetailsDetectedMatch } from "./ApiRouteConflictInfoConflictsDetailsDetectedMatch";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";
import { ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo } from "./ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo";


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


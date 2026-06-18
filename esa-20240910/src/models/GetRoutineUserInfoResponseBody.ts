// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineUserInfoResponseBodyRoutines extends $dara.Model {
  createTime?: string;
  description?: string;
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutineUserInfoResponseBody extends $dara.Model {
  requestId?: string;
  routines?: GetRoutineUserInfoResponseBodyRoutines[];
  subdomains?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routines: 'Routines',
      subdomains: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routines: { 'type': 'array', 'itemType': GetRoutineUserInfoResponseBodyRoutines },
      subdomains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routines)) {
      $dara.Model.validateArray(this.routines);
    }
    if(Array.isArray(this.subdomains)) {
      $dara.Model.validateArray(this.subdomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


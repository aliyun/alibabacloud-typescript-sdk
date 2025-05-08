// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRoutineUserInfoResponseBodyRoutines } from "./GetRoutineUserInfoResponseBodyRoutines";


export class GetRoutineUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * The routines.
   */
  routines?: GetRoutineUserInfoResponseBodyRoutines[];
  /**
   * @remarks
   * The subdomains.
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProgramTypeCountResponseBodyProgramTypeAndCounts extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      programType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProgramTypeCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node types and quantity.
   */
  programTypeAndCounts?: ListProgramTypeCountResponseBodyProgramTypeAndCounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      programTypeAndCounts: 'ProgramTypeAndCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programTypeAndCounts: { 'type': 'array', 'itemType': ListProgramTypeCountResponseBodyProgramTypeAndCounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.programTypeAndCounts)) {
      $dara.Model.validateArray(this.programTypeAndCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


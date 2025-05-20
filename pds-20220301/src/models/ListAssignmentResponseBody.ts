// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAssignmentResponseBodyAssignmentList } from "./ListAssignmentResponseBodyAssignmentList";


export class ListAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assigned roles.
   */
  assignmentList?: ListAssignmentResponseBodyAssignmentList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': ListAssignmentResponseBodyAssignmentList },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignmentList)) {
      $dara.Model.validateArray(this.assignmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


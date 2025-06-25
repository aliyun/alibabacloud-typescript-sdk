// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApproveCommandsResponseBodyApproveCommands } from "./ListApproveCommandsResponseBodyApproveCommands";


export class ListApproveCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commands to be reviewed.
   */
  approveCommands?: ListApproveCommandsResponseBodyApproveCommands[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3EF7711-766D-5888-997B-EFBA76809229
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands to be reviewed.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      approveCommands: 'ApproveCommands',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveCommands: { 'type': 'array', 'itemType': ListApproveCommandsResponseBodyApproveCommands },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.approveCommands)) {
      $dara.Model.validateArray(this.approveCommands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


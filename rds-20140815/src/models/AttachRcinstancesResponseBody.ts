// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachRCInstancesResponseBodyResponses } from "./AttachRcinstancesResponseBodyResponses";


export class AttachRCInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  responses?: AttachRCInstancesResponseBodyResponses[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 178968983
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': AttachRCInstancesResponseBodyResponses },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


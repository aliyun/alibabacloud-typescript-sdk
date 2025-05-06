// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskResultResponseBodyDataAsrResult } from "./GetTaskResultResponseBodyDataAsrResult";


export class GetTaskResultResponseBodyData extends $dara.Model {
  asrResult?: GetTaskResultResponseBodyDataAsrResult[];
  extra?: string;
  taskErrorMessage?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  /**
   * @example
   * FINISH
   */
  taskStatus?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      asrResult: 'asrResult',
      extra: 'extra',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetTaskResultResponseBodyDataAsrResult },
      extra: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPipelineRunResponseBodyPipelineStages } from "./GetPipelineRunResponseBodyPipelineStages";


export class GetPipelineRunResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the process was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the process.
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned when the process fails.
   * 
   * @example
   * Error message
   */
  message?: string;
  /**
   * @remarks
   * The time when the process was modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 56160
   */
  projectId?: number;
  /**
   * @remarks
   * The information about stages in the process.
   */
  stages?: GetPipelineRunResponseBodyPipelineStages[];
  /**
   * @remarks
   * The status of the process.
   * 
   * Valid values:
   * 
   * *   Init
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * *   Cancel
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'number',
      stages: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineStages },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


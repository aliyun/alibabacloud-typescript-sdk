// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages } from "./ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages";


export class ListPipelineRunsResponseBodyPagingInfoPipelineRuns extends $dara.Model {
  /**
   * @remarks
   * The time when the process was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1702736654000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the process.
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 097c73fe-ed6e-4fb1-b109-a5d59e46cd58
   */
  id?: string;
  /**
   * @remarks
   * The error message returned during the stage.
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
   * 1702736654000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 70199
   */
  projectId?: number;
  /**
   * @remarks
   * The stages of the process.
   */
  stages?: ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages[];
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
      stages: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPagingInfoPipelineRunsStages },
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


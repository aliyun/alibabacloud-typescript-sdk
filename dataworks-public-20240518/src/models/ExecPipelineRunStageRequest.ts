// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecPipelineRunStageRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the stage in the process. You can call the GetDeployment operation to query the code.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


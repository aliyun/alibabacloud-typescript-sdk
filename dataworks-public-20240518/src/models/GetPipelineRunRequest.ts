// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f****
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


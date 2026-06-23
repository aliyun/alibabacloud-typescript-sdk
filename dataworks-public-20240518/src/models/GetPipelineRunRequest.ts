// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Publishing Pipeline.
   * 
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can find this ID on the Workspace Management page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * This parameter specifies the DataWorks workspace for the API call.
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


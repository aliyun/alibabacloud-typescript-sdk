// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportOASTaskResponseBodyModelResultsModelResult extends $dara.Model {
  /**
   * @remarks
   * The cause of the failure if the model fails to be imported.
   * 
   * @example
   * Internal Error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 736508d885074167ba8fbce3bc95ea0b
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the imported model.
   * 
   * @example
   * 6b48d724c921415486e190c494dd6bf8
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Pet
   */
  modelName?: string;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   * 
   * @example
   * FAIL
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


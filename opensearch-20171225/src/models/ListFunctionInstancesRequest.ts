// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the feature.
   * 
   * @example
   * "PAAS"
   */
  functionType?: string;
  /**
   * @remarks
   * The type of the model.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The level of detail for the returned information. Valid values:
   * 
   * - normal: Displays information such as createParameters and cron. This is the default value.
   * 
   * - simple: Displays only basic information.
   * 
   * - detail: Returns the details of the training task.
   * 
   * @example
   * normal
   */
  output?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the instance. Valid values:
   * 
   * - builtin: The instance is created by the system.
   * 
   * - user: The instance is created by the user. This is the default value.
   * 
   * - all: All instances.
   * 
   * @example
   * user
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'functionType',
      modelType: 'modelType',
      output: 'output',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      modelType: 'string',
      output: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


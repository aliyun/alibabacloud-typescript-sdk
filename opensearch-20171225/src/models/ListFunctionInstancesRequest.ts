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
   * The richness of the returned information. Valid values:
   * 
   * *   normal: displays information such as createParameters and cron. This is the default value.
   * *   simple: displays only the basic information.
   * *   detail: returns the details of the training task.
   * 
   * @example
   * normal
   */
  output?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * How the instance is created. Valid values:
   * 
   * *   builtin: The instance is created by system.
   * *   user: The instance is created by user. This is the default value.
   * *   all: all instances
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


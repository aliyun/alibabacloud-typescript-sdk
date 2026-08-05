// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The feature type.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * ai_search
   */
  modelType?: string;
  /**
   * @remarks
   * The level of detail in the response. Valid values:
   * - simple: displays only basic information
   * - normal: displays information such as createParameters and cron (default)
   * - detail: returns training task information.
   * 
   * @example
   * simple
   */
  output?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance source. Valid values:
   * - builtin: system instance
   * - user: user instance (default)
   * - all: all instances.
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


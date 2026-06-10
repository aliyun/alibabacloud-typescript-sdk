// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  /**
   * @remarks
   * The NLU engine.
   * 
   * - Leave this parameter empty to query scripts that use small models.
   * 
   * - Set this parameter to `Prompts` to query scripts that use the text completion mode of a large model.
   * 
   * - Set this parameter to `SSE_FUNCTION` to query scripts that use the function calling mode of a large model.
   * 
   * - Set this parameter to `BeeBot` to query scripts that use the workflow configuration mode of a large model.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * 课程满意度回访
   */
  scriptName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nluEngine: 'NluEngine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptName: 'ScriptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nluEngine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


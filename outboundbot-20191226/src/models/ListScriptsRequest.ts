// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  /**
   * @remarks
   * The NLU robot engine.
   * 
   * - If this parameter is left empty, small model scenarios are queried.
   * 
   * - If this parameter is set to Prompts, the text input mode under large model scenarios is queried.
   * 
   * - If this parameter is set to SSE_FUNCTION, the function computing mode under large model scenarios is queried.
   * - If this parameter is set to BeeBot, the workflow configuration mode under large model scenarios is queried.
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
   * The script name.
   * 
   * @example
   * Course satisfaction follow-up
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


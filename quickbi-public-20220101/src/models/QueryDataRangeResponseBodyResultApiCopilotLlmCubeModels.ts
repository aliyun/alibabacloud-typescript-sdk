// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels extends $dara.Model {
  /**
   * @remarks
   * Alias of the LlmCube resource.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * Nickname of the creator.
   * 
   * @example
   * zhuge
   */
  createUser?: string;
  /**
   * @remarks
   * LlmCube resource ID.
   * 
   * @example
   * sdasdafas23342342342
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


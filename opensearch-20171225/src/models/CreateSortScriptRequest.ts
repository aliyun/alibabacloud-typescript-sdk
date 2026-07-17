// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSortScriptRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The applicable scope of the script.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The type of the script. Only cava_script is supported.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      scope: 'scope',
      scriptName: 'scriptName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scope: 'string',
      scriptName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


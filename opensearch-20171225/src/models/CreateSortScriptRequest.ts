// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSortScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The script type. Set the value to cava_script.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scriptName: 'scriptName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


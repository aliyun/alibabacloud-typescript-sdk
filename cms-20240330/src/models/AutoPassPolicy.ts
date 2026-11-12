// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoPassPolicy extends $dara.Model {
  /**
   * @remarks
   * The selected command prefix. The array must contain exactly one prefix. You must specify either this parameter or fullCommand.
   * 
   * @example
   * ["starops sls"]
   */
  commandPrefix?: string[];
  /**
   * @remarks
   * The full command for exact matching. The command must not be empty. You must specify either this parameter or commandPrefix.
   * 
   * @example
   * starops tool list
   */
  fullCommand?: string;
  /**
   * @remarks
   * The version required for a valid rule. The current version is v1.0.0.
   * 
   * @example
   * v1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commandPrefix: 'commandPrefix',
      fullCommand: 'fullCommand',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandPrefix: { 'type': 'array', 'itemType': 'string' },
      fullCommand: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commandPrefix)) {
      $dara.Model.validateArray(this.commandPrefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


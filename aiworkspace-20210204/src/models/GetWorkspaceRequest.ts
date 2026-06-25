// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return additional information, such as the workspace owner. Valid values:
   * 
   * - false (default): Does not return additional information.
   * 
   * - true: Returns additional information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


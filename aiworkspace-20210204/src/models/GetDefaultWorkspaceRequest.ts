// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return detailed information about the default workspace. The detailed information includes the Conditions list. Valid values:
   * 
   * - false (default): Detailed information is not returned.
   * 
   * - true: Detailed information is returned.
   * 
   * @example
   * false
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


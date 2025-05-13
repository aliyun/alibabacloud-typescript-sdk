// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to show the details of the default workspace. The details include the conditions of the workspace in different phases. Valid values:
   * 
   * *   false (default)
   * *   true
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


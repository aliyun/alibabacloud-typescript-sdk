// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated string used to specify additional information to return. This field does not take effect.
   * 
   * @example
   * NotSupport
   */
  extraVerboseFields?: string;
  /**
   * @remarks
   * Specifies whether to display supplementary information such as the workspace owner. Valid values:
   * - false: Does not display supplementary information.
   * - true: Displays supplementary information.
   * Default value: false.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      extraVerboseFields: 'ExtraVerboseFields',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraVerboseFields: 'string',
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


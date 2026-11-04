// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicUpdateTemplateStep extends $dara.Model {
  /**
   * @remarks
   * The build instruction parameters. The meaning varies depending on type: for USER, it is [username, optional passwordless sudo flag], and the second item configures passwordless sudo when the string is true; for WORKDIR, it is [directory]; for ENV, it is [key, value, ...], and multiple pairs can be set at once; for RUN, it is [command, optional temporary user].
   */
  args?: string[];
  /**
   * @remarks
   * The build instruction type. Valid values: USER, WORKDIR, ENV, and RUN. The instructions are executed sequentially in the order of the array.
   * 
   * @example
   * RUN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


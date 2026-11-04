// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateStep extends $dara.Model {
  /**
   * @remarks
   * The build instruction parameters, whose meaning varies depending on the type: for USER, it is [username, optional passwordless sudo flag], where the second item configures passwordless sudo when it is the string true; for WORKDIR, it is [directory]; for ENV, it is [key, value, ...], allowing multiple pairs to be set at once; for RUN, it is [command, optional temporary user].
   */
  args?: string[];
  /**
   * @remarks
   * The build instruction type, which supports four values: USER, WORKDIR, ENV, and RUN, executed sequentially in the order of the array.
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


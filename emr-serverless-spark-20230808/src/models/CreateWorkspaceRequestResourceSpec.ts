// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The maximum resource quota for a workspace.
   * 
   * @example
   * 1000
   */
  cu?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


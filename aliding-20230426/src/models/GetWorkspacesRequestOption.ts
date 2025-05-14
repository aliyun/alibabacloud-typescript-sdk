// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspacesRequestOption extends $dara.Model {
  /**
   * @example
   * true
   */
  withPermissionRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withPermissionRole: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


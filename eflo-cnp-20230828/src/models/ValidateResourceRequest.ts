// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateResourceRequestUserAccessParam } from "./ValidateResourceRequestUserAccessParam";


export class ValidateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-ouypm5aucy
   */
  clusterId?: string;
  /**
   * @remarks
   * User Authorization Parameters
   */
  userAccessParam?: ValidateResourceRequestUserAccessParam;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userAccessParam: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userAccessParam: ValidateResourceRequestUserAccessParam,
    };
  }

  validate() {
    if(this.userAccessParam && typeof (this.userAccessParam as any).validate === 'function') {
      (this.userAccessParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


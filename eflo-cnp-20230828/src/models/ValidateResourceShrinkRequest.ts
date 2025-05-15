// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateResourceShrinkRequest extends $dara.Model {
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
  userAccessParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userAccessParamShrink: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userAccessParamShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


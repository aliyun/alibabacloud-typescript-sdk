// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizationResourceInfo extends $dara.Model {
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * Parent resource ID.
   * 
   * @example
   * api-cujbijem1hkr4voden8g
   */
  parentResourceId?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * hr-d0mnu16m1hkgujnkgrcg
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      parentResourceId: 'parentResourceId',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      parentResourceId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


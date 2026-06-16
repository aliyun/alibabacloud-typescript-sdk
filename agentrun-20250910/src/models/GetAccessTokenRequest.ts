// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * mod-kw1750tjqs94n9k37o5hjk
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name of the agent runtime.
   * 
   * @example
   * COUPON_OPERATION_CALLBACK
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * SceneTestingTask
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


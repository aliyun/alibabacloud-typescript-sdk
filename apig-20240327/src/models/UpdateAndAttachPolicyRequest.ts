// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndAttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  description?: string;
  /**
   * @example
   * env-cq2avtllhtgja4dk5djg
   */
  environmentId?: string;
  /**
   * @example
   * gw-cq2avtllhtgja4dk5djg
   */
  gatewayId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      config: 'config',
      description: 'description',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      config: 'string',
      description: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


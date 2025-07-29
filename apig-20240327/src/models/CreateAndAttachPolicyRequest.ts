// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAttachPolicyRequest extends $dara.Model {
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
   * IpAccessControl
   */
  className?: string;
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
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
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
      className: 'className',
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
      className: 'string',
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


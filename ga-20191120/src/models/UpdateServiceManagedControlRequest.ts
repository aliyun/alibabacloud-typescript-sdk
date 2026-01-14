// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceManagedControlRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource whose control mode you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp149u6o36qt1as9b****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource whose control mode you want to change.
   * 
   * Set the value to **Accelerator**, which specifies a standard GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Accelerator
   */
  resourceType?: string;
  /**
   * @remarks
   * The control mode of the resource.
   * 
   * Set the value to **false**, which changes the control mode of the resource from managed mode to unmanaged mode.
   * 
   * >  You can change the control mode only from managed mode to unmanaged mode.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceManaged: 'ServiceManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


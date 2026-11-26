// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyHealthCheckTemplateToServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value of this parameter on the client side. Make sure that the value is unique across different requests and can be up to 64 ASCII characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: Prechecks the request without creating the resource. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the health check template.
   * 
   * This parameter is required.
   * 
   * @example
   * hct-bp1qjwo61pqz3ahltv****
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The ID of the backend server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-n80wyad08u0tox****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckTemplateId: 'string',
      serverGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


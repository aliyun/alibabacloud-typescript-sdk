// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotency of the request. Generate a unique value for this parameter from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Region ID. Allowed values:
   * 
   * - cn-hangzhou: East China 1 (Hangzhou).
   * 
   * - ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


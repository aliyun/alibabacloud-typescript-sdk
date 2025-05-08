// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


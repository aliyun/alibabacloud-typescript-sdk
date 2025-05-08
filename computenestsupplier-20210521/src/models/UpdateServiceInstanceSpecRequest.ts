// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceSpecRequest extends $dara.Model {
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
   * Specifies whether to enable Prometheus on the customer side. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   * 
   * @example
   * {\\"EcsInstanceParameter\\":\\"4vCPU 8GiB\\",\\"ZoneId\\":\\"cn-heyuan-a\\",\\"SystemDiskSize\\":50,\\"DataDiskSize\\":150,\\"InternetMaxBandwidthOut\\":2,\\"RegionId\\":\\"cn-heyuan\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * package one
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterInfoResponseBodyInstanceListInstance extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Instance not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * apigateway-ht-04e41d95e9c1
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * tf-testacceu-central-1apigatewayinstance8752
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      instanceId: 'string',
      instanceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


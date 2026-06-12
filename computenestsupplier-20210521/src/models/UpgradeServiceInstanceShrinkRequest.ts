// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value for this parameter from your client. The **ClientToken** value can contain only ASCII characters and must be no more than 64 characters in length.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run checks for issues such as permission errors and instance status. Valid values:
   * 
   * - true: Sends a dry run request to check whether the request is valid. The service instance is not upgraded.
   * 
   * - false: Sends a regular request. The service instance is upgraded after the request passes the check.
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
  parametersShrink?: string;
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
   * The service instance ID.
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
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


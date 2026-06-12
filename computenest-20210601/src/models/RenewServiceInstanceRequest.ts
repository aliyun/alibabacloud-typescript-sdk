// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run of the renewal request, including permission and instance status checks. Valid values:
   * 
   * - **true**: Sends the request without renewing the service instance.
   * 
   * - **false**: Sends the request and renews the service instance after the checks pass.
   * 
   * Default value: false. The operation is allowed only when the service instance is in the Pending Renewal or Renewal Failed state.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-70a3b15bb626435b****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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


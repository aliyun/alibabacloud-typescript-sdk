// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRegistrationResponseBodyServiceInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceType: 'ServiceType',
      trialType: 'TrialType',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceType: 'string',
      trialType: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


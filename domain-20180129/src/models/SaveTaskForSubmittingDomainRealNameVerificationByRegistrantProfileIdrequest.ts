// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileIDRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to submit for real-name verification.
   * 
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name instance.
   * 
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the error message to return. Valid values: `zh` (Chinese) and `en` (English). Default value: `en`.
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the registrant profile to use for real-name verification.
   * 
   * This parameter is required.
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The IP address of the client that makes the request.
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing access application. You can obtain the value from:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists internal-facing access applications.
   * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Creates an internal-facing access application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


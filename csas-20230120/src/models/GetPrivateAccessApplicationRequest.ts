// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the office application. You can obtain the value by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries office applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an office application.
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


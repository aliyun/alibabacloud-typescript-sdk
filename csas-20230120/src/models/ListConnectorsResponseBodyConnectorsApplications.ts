// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyConnectorsApplications extends $dara.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @example
   * application_name
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


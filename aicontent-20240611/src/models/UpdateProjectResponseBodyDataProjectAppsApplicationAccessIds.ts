// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectResponseBodyDataProjectAppsApplicationAccessIds extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * MyAppSecret
   */
  applicationAccessSecret?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccessId: 'applicationAccessId',
      applicationAccessSecret: 'applicationAccessSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessId: 'string',
      applicationAccessSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


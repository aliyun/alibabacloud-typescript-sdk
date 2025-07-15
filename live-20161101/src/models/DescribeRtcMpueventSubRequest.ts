// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcMPUEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of your application.
   * 
   * > The ID can be up to 64 characters in length and can contain letters, digits, underscores, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


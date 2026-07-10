// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaunchTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The launch template ID.
   * 
   * @example
   * lt-m5eiaupmvm2op9d****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The launch template version number.
   * 
   * @example
   * 20
   */
  launchTemplateVersionNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersionNumber: 'LaunchTemplateVersionNumber',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateId: 'string',
      launchTemplateVersionNumber: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


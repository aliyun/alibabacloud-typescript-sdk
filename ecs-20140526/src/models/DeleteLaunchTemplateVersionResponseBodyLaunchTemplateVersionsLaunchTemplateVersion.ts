// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion extends $dara.Model {
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-m5eiaupmvm2op9d****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version number of the launch template.
   * 
   * @example
   * 2
   */
  launchTemplateVersionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersionNumber: 'LaunchTemplateVersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateId: 'string',
      launchTemplateVersionNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


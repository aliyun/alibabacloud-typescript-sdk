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

export class DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions extends $dara.Model {
  launchTemplateVersion?: DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersion: 'LaunchTemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersion: { 'type': 'array', 'itemType': DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersionsLaunchTemplateVersion },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateVersion)) {
      $dara.Model.validateArray(this.launchTemplateVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLaunchTemplateVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deleted launch template versions.
   */
  launchTemplateVersions?: DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersions: 'LaunchTemplateVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersions: DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.launchTemplateVersions && typeof (this.launchTemplateVersions as any).validate === 'function') {
      (this.launchTemplateVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


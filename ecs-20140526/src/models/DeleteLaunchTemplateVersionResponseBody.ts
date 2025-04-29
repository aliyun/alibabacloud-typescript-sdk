// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions } from "./DeleteLaunchTemplateVersionResponseBodyLaunchTemplateVersions";


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


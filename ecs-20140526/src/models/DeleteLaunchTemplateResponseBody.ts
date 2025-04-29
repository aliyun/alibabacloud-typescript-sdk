// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLaunchTemplateResponseBodyLaunchTemplateVersionNumbers } from "./DeleteLaunchTemplateResponseBodyLaunchTemplateVersionNumbers";


export class DeleteLaunchTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the launch template. For more information, see [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * You must specify `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The versions of the deleted launch template.
   */
  launchTemplateVersionNumbers?: DeleteLaunchTemplateResponseBodyLaunchTemplateVersionNumbers;
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
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersionNumbers: 'LaunchTemplateVersionNumbers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateId: 'string',
      launchTemplateVersionNumbers: DeleteLaunchTemplateResponseBodyLaunchTemplateVersionNumbers,
      requestId: 'string',
    };
  }

  validate() {
    if(this.launchTemplateVersionNumbers && typeof (this.launchTemplateVersionNumbers as any).validate === 'function') {
      (this.launchTemplateVersionNumbers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


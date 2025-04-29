// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaunchTemplateVersionResponseBody extends $dara.Model {
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
   * The number of the created version of the launch template.
   * 
   * @example
   * 2
   */
  launchTemplateVersionNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DExxxxx
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


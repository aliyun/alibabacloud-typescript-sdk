// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData } from "./DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData";


export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet extends $dara.Model {
  /**
   * @remarks
   * The time when the launch template version was created.
   * 
   * @example
   * 2022-01-17T08:22:43Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the launch template.
   * 
   * @example
   * 123456789****
   */
  createdBy?: string;
  /**
   * @remarks
   * Indicates whether the launch template version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The configurations of the launch template.
   */
  launchTemplateData?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-bp67acfmxazb4p****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The time when the launch template version was modified.
   * 
   * @example
   * 2022-01-17T08:40:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The description of the launch template version.
   * 
   * @example
   * testVersionDescription
   */
  versionDescription?: string;
  /**
   * @remarks
   * The number of the launch template version.
   * 
   * @example
   * 1
   */
  versionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      defaultVersion: 'DefaultVersion',
      launchTemplateData: 'LaunchTemplateData',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      modifiedTime: 'ModifiedTime',
      versionDescription: 'VersionDescription',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createdBy: 'string',
      defaultVersion: 'boolean',
      launchTemplateData: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData,
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      modifiedTime: 'string',
      versionDescription: 'string',
      versionNumber: 'number',
    };
  }

  validate() {
    if(this.launchTemplateData && typeof (this.launchTemplateData as any).validate === 'function') {
      (this.launchTemplateData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


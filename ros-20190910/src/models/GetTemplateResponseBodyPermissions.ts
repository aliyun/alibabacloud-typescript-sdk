// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account with which the template is shared.
   * 
   * @example
   * 142437958638****
   */
  accountId?: string;
  /**
   * @remarks
   * The sharing option.
   * 
   * The value ShareToAccounts indicates that the template is shared with one or more Alibaba Cloud accounts.
   * 
   * @example
   * ShareToAccounts
   */
  shareOption?: string;
  /**
   * @remarks
   * The service that is used for resource sharing. Valid values:
   * 
   * - ROS: Resources are shared from ROS by using the ROS console or calling the ROS API.
   * - ResourceDirectory: Resources are shared with accounts in a resource directory from Resource Management by using the resource sharing feature.
   * > -  The number of accounts with which resources are shared from ROS is independent of the number of accounts with which resources are shared from the resource directory.
   * > -  The shared resources from ROS cannot override or overwrite the shared resources from the resource directory.
   * > -  The shared resources from the resource directory can overwrite the shared resources from ROS.
   * 
   * @example
   * ROS
   */
  shareSource?: string;
  /**
   * @remarks
   * The version of the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts and set VersionOption to Specified or Current.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The version option for the shared template. This parameter is returned only if you set ShareOption to ShareToAccounts.
   * 
   * Valid values:
   * 
   * *   AllVersions: All template versions are shared.
   * *   Latest: Only the latest template version is shared. When the version of the template is updated, Resource Orchestration Service (ROS) updates the shared version to the latest version.
   * *   Current: Only the latest template version is shared. When the version of the template is updated, ROS does not update the shared version.
   * *   Specified: Only the specified template version is shared.
   * 
   * @example
   * AllVersions
   */
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      shareOption: 'ShareOption',
      shareSource: 'ShareSource',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      shareOption: 'string',
      shareSource: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


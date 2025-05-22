// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTemplatePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud accounts with or from which you want to share or unshare the template.\\
   * Valid values of N: 1, 2, 3, 4, and 5.
   * 
   * > - This parameter cannot be set to the ID of the Alibaba Cloud account that owns the template, or the RAM users of this Alibaba Cloud account.
   * > - When ShareOption is set to CancelSharing, you can unshare the template from all the specified Alibaba Cloud accounts by using an asterisk (\\*).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  accountIds?: string[];
  /**
   * @remarks
   * The sharing option.
   * 
   * Valid values:
   * 
   * *   ShareToAccounts: shares the template with other Alibaba Cloud accounts.
   * *   CancelSharing: unshares the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ShareToAccounts
   */
  shareOption?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The version of the shared template. This parameter takes effect only if you set ShareOption to ShareToAccounts and set VersionOption to Specified.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The version option for the shared template. This parameter takes effect only if you set ShareOption to ShareToAccounts.
   * 
   * Valid values:
   * 
   * *   AllVersions (default): shares all versions of the template.
   * *   Latest: shares only the latest version of template. When the version of the template is updated, ROS updates the shared version to the latest version.
   * *   Current: shares only the current version of the template. When the version of the template is updated, ROS does not update the shared version.
   * *   Specified: shares only the specified version of the template.
   * 
   * @example
   * Specified
   */
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      shareOption: 'ShareOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      shareOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


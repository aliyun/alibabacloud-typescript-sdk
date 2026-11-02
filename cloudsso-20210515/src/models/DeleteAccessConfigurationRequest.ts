// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-001j9mcm3k7335bc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly remove system policies and inline policies. Valid values:
   * 
   * - true: The system forcibly removes the associated system policies and inline policies when the access configuration is deleted.
   * - false (default): The system does not forcibly remove the associated system policies and inline policies when the access configuration is deleted. If these policies exist, the deletion fails. You must remove these system policies and inline policies before you delete the access configuration. For more information, see [RemovePermissionPolicyFromAccessConfiguration](https://help.aliyun.com/document_detail/336904.html).
   * 
   * @example
   * false
   */
  forceRemovePermissionPolicies?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      forceRemovePermissionPolicies: 'ForceRemovePermissionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      forceRemovePermissionPolicies: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


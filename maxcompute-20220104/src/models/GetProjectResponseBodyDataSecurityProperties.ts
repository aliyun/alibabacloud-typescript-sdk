// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyDataSecurityPropertiesProjectProtection } from "./GetProjectResponseBodyDataSecurityPropertiesProjectProtection";


export class GetProjectResponseBodyDataSecurityProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the [download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the [label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Indicates whether to allow the object creator to have the access permissions on the object. The default value is true, which indicates that the object creator has the access permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the object creator has the authorization permissions on the object. The default value is true, which indicates that the object creator has the authorization permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The properties of the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection).
   */
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Indicates whether the [ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Indicates whether the [policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: GetProjectResponseBodyDataSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


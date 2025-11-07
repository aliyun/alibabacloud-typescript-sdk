// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitOrganizationsResponseBodyGitOrgs extends $dara.Model {
  /**
   * @example
   * dfj3535
   */
  orgId?: string;
  /**
   * @example
   * aliyun-computenest
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitOrganizationsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  gitOrgs?: ListGitOrganizationsResponseBodyGitOrgs[];
  /**
   * @example
   * 9E011F98-4EE5-5E3A-8FA3-D38F2C531C1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gitOrgs: 'GitOrgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gitOrgs: { 'type': 'array', 'itemType': ListGitOrganizationsResponseBodyGitOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gitOrgs)) {
      $dara.Model.validateArray(this.gitOrgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


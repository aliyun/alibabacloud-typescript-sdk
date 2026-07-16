// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentsResponseBodyEnvironmentList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-08-15T08:15:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * yichao-test-yctest
   */
  environmentName?: string;
  /**
   * @remarks
   * Indicates whether this is the default environment.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The previous version number.
   * 
   * @example
   * -1
   */
  preSiteVersion?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 56
   */
  priority?: number;
  /**
   * @remarks
   * Indicates whether the environment is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The environment rule.
   * 
   * @example
   * ("ip" eq "1.1.1.1")
   */
  rule?: string;
  /**
   * @remarks
   * The site version number.
   * 
   * @example
   * 8
   */
  siteVersion?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-09-15T08:16:04Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      environmentName: 'EnvironmentName',
      isDefault: 'IsDefault',
      preSiteVersion: 'PreSiteVersion',
      priority: 'Priority',
      readOnly: 'ReadOnly',
      rule: 'Rule',
      siteVersion: 'SiteVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      environmentName: 'string',
      isDefault: 'boolean',
      preSiteVersion: 'number',
      priority: 'number',
      readOnly: 'boolean',
      rule: 'string',
      siteVersion: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of environments.
   */
  environmentList?: ListEnvironmentsResponseBodyEnvironmentList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentList: 'EnvironmentList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentList: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyEnvironmentList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environmentList)) {
      $dara.Model.validateArray(this.environmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


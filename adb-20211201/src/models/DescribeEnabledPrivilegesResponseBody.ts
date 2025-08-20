// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnabledPrivilegesResponseBodyDataPrivileges extends $dara.Model {
  /**
   * @remarks
   * The description of the permission.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * select
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the permission level.
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * The queried permissions.
   * 
   * This parameter is required.
   */
  privileges?: DescribeEnabledPrivilegesResponseBodyDataPrivileges[];
  /**
   * @remarks
   * The permission level.
   * 
   * This parameter is required.
   * 
   * @example
   * Global
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      privileges: 'Privileges',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      privileges: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyDataPrivileges },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried permission level and permissions.
   */
  data?: DescribeEnabledPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 246F42E0-A475-15FF-96D2-8DC47FC2F289
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The filter type. Valid values: USER, USER_GROUP. If not specified, all types are returned.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * SampleKeyword
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * Permission
   * 
   * @example
   * USE
   */
  permission?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      granteeType: 'granteeType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      permission: 'permission',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      permission: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


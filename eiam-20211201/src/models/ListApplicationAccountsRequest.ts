// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_11111
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  /**
   * @remarks
   * 当前查询的列表页码，默认为1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


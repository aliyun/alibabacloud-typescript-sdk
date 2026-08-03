// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  securityToken?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNum: 'string',
      pageSize: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


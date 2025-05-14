// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkillGroupsRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 1023****
   */
  departmentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      clientToken: 'string',
      departmentId: 'number',
      instanceId: 'string',
      pageNo: 'number',
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


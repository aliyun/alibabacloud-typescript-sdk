// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkillGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type of the skill group. Valid values:
   * 
   * - **0**: All skill groups are returned.
   * - **1**: Hotline skill group.
   * - **2**: Online skill group.
   * - **3**: Online + hotline skill group.
   * - **4**: Ticket skill group.
   * - **5**: Hotline + ticket skill group.
   * - **6**: Online + ticket skill group.
   * - **7**: Online + hotline + ticket skill group.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * The unique ID of the client request. Used for idempotence verification. You can use a UUID to generate this ID.
   * 
   * @example
   * 46c1341e-2648-447a-****-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 1023****
   */
  departmentId?: number;
  /**
   * @remarks
   * The ID of the AICCS instance.
   * You can obtain the instance ID from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
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


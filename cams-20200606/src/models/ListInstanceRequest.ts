// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  bindId?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **whatsapp**
   * 
   * - **messenger**
   * - **instagram**
   * 
   * <props="intl">- **viber**
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * aa
   */
  filterStr?: string;
  /**
   * @remarks
   * The instance ID. Only non-Alibaba Cloud hosts are supported.
   * 
   * @example
   * r-uf6wd7pkyjwxvlxfhk
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  isBind?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 92
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 87
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the instance belongs.
   * 
   * @example
   * 11
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The submit time.
   * 
   * @example
   * 2023-12-12 00:00:00
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
      channelType: 'ChannelType',
      filterStr: 'FilterStr',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isBind: 'IsBind',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
      channelType: 'string',
      filterStr: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isBind: 'boolean',
      pageIndex: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


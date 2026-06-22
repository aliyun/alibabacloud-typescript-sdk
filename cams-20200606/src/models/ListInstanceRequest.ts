// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **whatsapp**
   * 
   * - **messenger**
   * 
   * - **instagram**
   * 
   * <props="intl">
   * 
   * - **viber**
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @remarks
   * The filter string for the query.
   * 
   * @example
   * aa
   */
  filterStr?: string;
  /**
   * @remarks
   * The instance ID. Use this parameter for non-Alibaba Cloud hosts only.
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
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 92
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of items to return per page.
   * 
   * @example
   * 87
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group that contains the instance.
   * 
   * @example
   * 11
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The submission time, in `YYYY-MM-DD HH:MM:SS` format.
   * 
   * @example
   * 2023-12-12 00:00:00
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      filterStr: 'FilterStr',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      filterStr: 'string',
      instanceId: 'string',
      instanceName: 'string',
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


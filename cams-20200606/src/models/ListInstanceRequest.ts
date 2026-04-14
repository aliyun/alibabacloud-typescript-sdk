// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @example
   * aa
   */
  filterStr?: string;
  /**
   * @example
   * r-uf6wd7pkyjwxvlxfhk
   */
  instanceId?: string;
  /**
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @example
   * 92
   */
  pageIndex?: number;
  /**
   * @example
   * 87
   */
  pageSize?: number;
  /**
   * @example
   * 11
   */
  resourceGroupId?: string;
  /**
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


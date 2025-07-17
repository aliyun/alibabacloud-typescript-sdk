// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * TestGroup
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 12345
   */
  groupIds?: string;
  /**
   * @remarks
   * Specifies whether to return all the alert contacts in the queried alert contact group. Valid values:
   * 
   * *   `false`
   * *   `true`
   * 
   * @example
   * true
   */
  isDetail?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of alert contact groups displayed on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      groupIds: 'GroupIds',
      isDetail: 'IsDetail',
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      groupIds: 'string',
      isDetail: 'boolean',
      page: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group. You can query multiple alert contact groups at a time. Separate multiple group IDs with commas (,).
   * 
   * @example
   * 746
   */
  contactGroupIds?: string;
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
   * The ID of the alert contact. You can call the SearchAlertContact operation to query the contact IDs. For more information, see [SearchAlertContact](https://help.aliyun.com/document_detail/130703.html).
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * John Doe
   */
  contactName?: string;
  /**
   * @remarks
   * Specifies whether to return all alert contacts in the queried alert contact group. By default, not all alert contacts are returned.
   * 
   * @example
   * true
   */
  isDetail?: boolean;
  /**
   * @remarks
   * The ID of the region. Default value: `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      contactGroupName: 'ContactGroupName',
      contactId: 'ContactId',
      contactName: 'ContactName',
      isDetail: 'IsDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      contactGroupName: 'string',
      contactId: 'number',
      contactName: 'string',
      isDetail: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


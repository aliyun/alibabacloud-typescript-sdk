// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact that you want to query. Separate multiple contact IDs with spaces.
   * 
   * @example
   * 123,321
   */
  contactIds?: string;
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
   * The email address of the alert contact.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
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
   * The mobile number of the alert contact.
   * 
   * @example
   * 1381111*****
   */
  phone?: string;
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
   * The number of alert contacts to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to return redundant information.
   * 
   * @example
   * true
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      contactName: 'ContactName',
      email: 'Email',
      page: 'Page',
      phone: 'Phone',
      regionId: 'RegionId',
      size: 'Size',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      contactName: 'string',
      email: 'string',
      page: 'number',
      phone: 'string',
      regionId: 'string',
      size: 'number',
      verbose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


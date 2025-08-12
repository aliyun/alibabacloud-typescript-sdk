// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactListRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Mail: emails
   * *   DingWebHook: DingTalk chatbots
   * 
   * @example
   * Mail
   */
  chanelType?: string;
  /**
   * @remarks
   * The value specified for the alert notification method.
   * 
   * >  This parameter is required only if you set the `ChanelType` parameter to `Mail`.
   * 
   * @example
   * Alice@example.com
   */
  chanelValue?: string;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * Alice
   */
  contactName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chanelType: 'ChanelType',
      chanelValue: 'ChanelValue',
      contactName: 'ContactName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chanelType: 'string',
      chanelValue: 'string',
      contactName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


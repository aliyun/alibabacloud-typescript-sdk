// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON character string for channel parameter settings. Example for the IM type: {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   * 
   * This parameter is required.
   * 
   * @example
   * {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Chen Rui
   */
  contactName?: string;
  /**
   * @remarks
   * The contact type.
   * - IM: Configures an IM channel notification contact.
   * 
   * This parameter is required.
   * 
   * @example
   * IM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contactName: 'ContactName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contactName: 'string',
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


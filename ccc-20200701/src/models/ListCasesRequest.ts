// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  phoneNumber?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


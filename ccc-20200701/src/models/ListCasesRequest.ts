// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesRequest extends $dara.Model {
  /**
   * @remarks
   * Predictive outbound dialing activity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The paging ordinal number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by phone number. Fuzzy Matching is not supported. This parameter is not Required and defaults to empty.
   * 
   * @example
   * 无
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Pending (to be dialed)<br>
   * Executing (dialing in progress)<br>
   * Connected (contact succeeded)<br>
   * Failed (contact failed)<br>
   * Aborted (call stopped or canceled)<br>
   * Forbidden (call prohibited by rule, such as blacklist)
   * 
   * @example
   * Pending
   */
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


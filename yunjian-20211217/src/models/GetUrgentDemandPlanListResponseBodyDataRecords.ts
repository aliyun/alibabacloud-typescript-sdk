// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandPlanListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 1705524002740212
   */
  accountId?: string;
  /**
   * @example
   * xxxx
   */
  accountName?: string;
  /**
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @example
   * https://xxx
   */
  approvalUrl?: string;
  /**
   * @example
   * 1111
   */
  creator?: string;
  /**
   * @example
   * xxxx
   */
  creatorName?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * 2021-12-20 10:29:50
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-12-20 10:29:50
   */
  gmtModified?: string;
  /**
   * @example
   * xxxx
   */
  modifier?: string;
  /**
   * @example
   * xxxx
   */
  modifierName?: string;
  planId?: number;
  planName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountType: 'accountType',
      approvalUrl: 'approvalUrl',
      creator: 'creator',
      creatorName: 'creatorName',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      modifierName: 'modifierName',
      planId: 'planId',
      planName: 'planName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountType: 'string',
      approvalUrl: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      modifierName: 'string',
      planId: 'number',
      planName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


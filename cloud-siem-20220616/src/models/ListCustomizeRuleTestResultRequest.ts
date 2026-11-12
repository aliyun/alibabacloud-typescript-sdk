// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizeRuleTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the custom rule. You can obtain the rule ID by calling the rule list API operation.
   * 
   * @example
   * dr-53np4nguf5jmh1vc****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1731797891000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account
   * - 1: the view of all accounts in the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1723057091000
   */
  startTime?: number;
  /**
   * @remarks
   * The verification result of the accuracy of alert fields based on the alert template. Valid values:
   * - true: Passed. Alerts from enabled rules can be synchronized to the product side.
   * - false: Failed. Alerts cannot pass the product-side verification.
   * 
   * @example
   * true
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      detectionRuleId: 'DetectionRuleId',
      endTime: 'EndTime',
      id: 'Id',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      detectionRuleId: 'string',
      endTime: 'number',
      id: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


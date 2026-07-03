// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizeRuleTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the custom rule. You can obtain the rule ID from the rule list.
   * 
   * @example
   * dr-53np4nguf5jmh1vc****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The end time.
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
   * The number of entries per page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select a region based on the region where your assets are deployed. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland and China (Hong Kong)
   * 
   * - ap-southeast-1: assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. This parameter is used by an administrator to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1723057091000
   */
  startTime?: number;
  /**
   * @remarks
   * The verification result for the accuracy of alert fields based on the alert template.
   * 
   * - true: The verification is passed. Alerts that are generated for enabled rules can be synchronized to the product.
   * 
   * - false: The verification failed. Alerts cannot be synchronized to the product.
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


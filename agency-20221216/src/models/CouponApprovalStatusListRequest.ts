// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CouponApprovalStatusListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the coupon template.
   * 
   * @example
   * 5093156
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Test coupon template
   */
  templateName?: string;
  /**
   * @remarks
   * The status of the coupon template. Valid values:
   * - **1**: application revoked
   * - **2**: under review
   * - **3**: review rejected
   * - **4**: review approved
   * - **5**: review approved but issuance failed
   * - **6**: automatically approved
   * - **7**: automatically approved but issuance failed
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      templateId: 'string',
      templateName: 'string',
      templateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


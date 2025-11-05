// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CouponApprovalStatusListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5093156
   */
  templateId?: string;
  templateName?: string;
  /**
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


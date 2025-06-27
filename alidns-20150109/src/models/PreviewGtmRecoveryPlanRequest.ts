// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on per page. Maximum value: **20**. Default value: **5**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the disaster recovery plan that you want to preview.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


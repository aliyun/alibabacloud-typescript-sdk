// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageFaceVerifyDataRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Required. The end time in the yyyy-MM-dd format. The default value is yyyy-MM-dd 00:00:00. The maximum query interval is 90 days.
   * 
   * @example
   * 2023-04-30
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 36**01
   */
  sceneId?: number;
  /**
   * @remarks
   * Required. The start time in the yyyy-MM-dd format. The default value is yyyy-MM-dd 00:00:00. The maximum query interval is 90 days.
   * 
   * @example
   * 2023-04-10
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      productCode: 'string',
      sceneId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


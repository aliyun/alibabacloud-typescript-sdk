// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageFaceVerifyDataRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-04-30
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @example
   * 36**01
   */
  sceneId?: number;
  /**
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


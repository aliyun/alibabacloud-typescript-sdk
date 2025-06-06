// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageFaceVerifyDataResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2024-03-24T00:00:00.000Z
   */
  date?: string;
  /**
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @example
   * 20**40
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 1
   */
  successCount?: string;
  /**
   * @example
   * 19
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      productCode: 'string',
      sceneId: 'string',
      sceneName: 'string',
      successCount: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


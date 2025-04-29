// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagListPageResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The API operation that is called by the frontend.
   * 
   * @example
   * TwoElementsVerification
   */
  apiName?: string;
  /**
   * @remarks
   * Code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The URL for the API documentation.
   * 
   * @example
   * https://help.aliyun.com/document_detail/388997.html?spm=a2c4g.388997.0.0.cf804cc7DX4vlP
   */
  docAddress?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 75
   */
  id?: number;
  /**
   * @remarks
   * The industry ID.
   * 
   * @example
   * 2
   */
  industryId?: number;
  /**
   * @remarks
   * The industry name.
   * 
   * @example
   * Test
   */
  industryName?: string;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * for autotest new
   */
  introduction?: string;
  /**
   * @remarks
   * Indicates whether the number is activated.
   * 
   * @example
   * 45
   */
  isOpen?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Aliyun
   */
  name?: string;
  /**
   * @remarks
   * *   0: The number is hidden.
   * *   1: The number is public.
   * 
   * @example
   * 1
   */
  saleStatusStr?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 13
   */
  sceneId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * check
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      code: 'Code',
      docAddress: 'DocAddress',
      id: 'Id',
      industryId: 'IndustryId',
      industryName: 'IndustryName',
      introduction: 'Introduction',
      isOpen: 'IsOpen',
      name: 'Name',
      saleStatusStr: 'SaleStatusStr',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      code: 'string',
      docAddress: 'string',
      id: 'number',
      industryId: 'number',
      industryName: 'string',
      introduction: 'string',
      isOpen: 'number',
      name: 'string',
      saleStatusStr: 'string',
      sceneId: 'number',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


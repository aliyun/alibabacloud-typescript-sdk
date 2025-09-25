// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartStatisticsPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * End time, using UTC format, in the form of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-16 23:59:59 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36**01
   */
  sceneId?: string;
  /**
   * @remarks
   * ServiceCode for the real person cloud product, only value: **cloudauthst**.
   * 
   * @example
   * cloudauthst
   */
  serviceCode?: string;
  /**
   * @remarks
   * Start time, using UTC format, in the form of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-11-01 00:00:00 +0800
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      endDate: 'string',
      pageSize: 'string',
      sceneId: 'string',
      serviceCode: 'string',
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


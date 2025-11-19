// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageOrdersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  currentPage?: number;
  desktopIdListShrink?: string;
  orderIdListShrink?: string;
  orderStatusListShrink?: string;
  pageSize?: number;
  productTypeListShrink?: string;
  resourceIdListShrink?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      currentPage: 'CurrentPage',
      desktopIdListShrink: 'DesktopIdList',
      orderIdListShrink: 'OrderIdList',
      orderStatusListShrink: 'OrderStatusList',
      pageSize: 'PageSize',
      productTypeListShrink: 'ProductTypeList',
      resourceIdListShrink: 'ResourceIdList',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      currentPage: 'number',
      desktopIdListShrink: 'string',
      orderIdListShrink: 'string',
      orderStatusListShrink: 'string',
      pageSize: 'number',
      productTypeListShrink: 'string',
      resourceIdListShrink: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


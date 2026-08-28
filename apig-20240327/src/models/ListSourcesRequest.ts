// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type by which you want to query sources.
   * 
   * Valid values:
   * 
   * *   K8S
   * *   MSE_NACOS
   * 
   * @example
   * MSE_NACOS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity codes. Separate multiple codes with commas (,).
   * 
   * @example
   * cmgj000112,cmgj000113
   */
  codes?: string;
  /**
   * @remarks
   * The commodity codes to exclude. This parameter cannot be specified together with the Codes parameter. Separate multiple codes with commas (,).
   * 
   * @example
   * cmgj000114,cmgj000115
   */
  exceptCodes?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The commodity type. Valid values:
   * - APP: application
   * - SERVICE: service
   * - MIRROR: image
   * - DOWNLOAD: download
   * - API_SERVICE: API
   * - ROS: resource orchestration
   * - DOCKER: container
   * - IOT: IoT.
   * 
   * @example
   * 1
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      exceptCodes: 'ExceptCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: 'string',
      exceptCodes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


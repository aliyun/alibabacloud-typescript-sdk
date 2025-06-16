// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePublicIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response messages.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The range of the public IP addresses of the VPC in the region.
   * 
   * @example
   * 110.11.1.0/24
   */
  publicIpAddress?: string[];
  /**
   * @remarks
   * The ID of the region to which the public IP addresses belong.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publicIpAddress: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddress)) {
      $dara.Model.validateArray(this.publicIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


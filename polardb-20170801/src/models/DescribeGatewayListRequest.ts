// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The description of the gateway instance.
   * 
   * @example
   * test
   */
  gwDescription?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      gwDescription: 'GwDescription',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      gwDescription: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


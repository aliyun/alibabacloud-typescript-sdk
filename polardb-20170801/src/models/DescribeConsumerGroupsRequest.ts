// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * cg-xxxxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The page number to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * The default value is 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      gwClusterId: 'GwClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      gwClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


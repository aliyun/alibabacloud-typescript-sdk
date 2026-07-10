// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * cg-xxxxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  consumerName?: string;
  consumerNameList?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      consumerId: 'ConsumerId',
      consumerName: 'ConsumerName',
      consumerNameList: 'ConsumerNameList',
      gwClusterId: 'GwClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerId: 'string',
      consumerName: 'string',
      consumerNameList: 'string',
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


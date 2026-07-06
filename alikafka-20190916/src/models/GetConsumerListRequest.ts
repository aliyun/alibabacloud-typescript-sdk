// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group. If you do not specify this parameter, information about all consumer groups is returned.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h18sav****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of consumer groups to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      currentPage: 'number',
      instanceId: 'string',
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


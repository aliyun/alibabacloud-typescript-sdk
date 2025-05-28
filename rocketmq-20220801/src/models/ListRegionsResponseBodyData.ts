// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegionsResponseBodyDataTags } from "./ListRegionsResponseBodyDataTags";


export class ListRegionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V4 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV4?: boolean;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V5 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV5?: boolean;
  /**
   * @remarks
   * The region tags.
   */
  tags?: ListRegionsResponseBodyDataTags[];
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was last modified.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      regionId: 'regionId',
      regionName: 'regionName',
      supportRocketmqV4: 'supportRocketmqV4',
      supportRocketmqV5: 'supportRocketmqV5',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      regionName: 'string',
      supportRocketmqV4: 'boolean',
      supportRocketmqV5: 'boolean',
      tags: { 'type': 'array', 'itemType': ListRegionsResponseBodyDataTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


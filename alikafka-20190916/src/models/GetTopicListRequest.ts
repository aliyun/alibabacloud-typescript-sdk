// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicListRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the instance to which the topic belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-0pp1954n****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the instance to which the topic belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the topic whose information you want to retrieve.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      instanceId: 'string',
      pageSize: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


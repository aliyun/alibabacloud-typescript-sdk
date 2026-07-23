// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of A/B testing metric IDs.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * A comma-separated list of A/B testing metric names.
   * 
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  /**
   * @remarks
   * The metric group description.
   * 
   * @example
   * 访问量相关指标
   */
  description?: string;
  /**
   * @remarks
   * The metric group name.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 2799614***
   */
  owner?: string;
  /**
   * @remarks
   * Whether the metric group is a real-time metric group.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
   * @remarks
   * The scene ID. You can get this ID by calling the [ListScenes](https://icms.alibaba-inc.com/content/learn/pai?l=1\\&m=16768\\&n=4298955) operation.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      ABMetricNames: 'ABMetricNames',
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      realtime: 'Realtime',
      requestId: 'RequestId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      ABMetricNames: 'string',
      description: 'string',
      name: 'string',
      owner: 'string',
      realtime: 'boolean',
      requestId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ABTest metrics, separated by commas.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * The names of the ABTest metrics, separated by commas.
   * 
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  /**
   * @remarks
   * The description of the metric group.
   * 
   * @example
   * Traffic-related metrics
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric group.
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
   * Indicates whether the metric group is real-time.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scene. You can obtain the ID by calling the [ListScenes](https://icms.alibaba-inc.com/content/learn/pai?l=1&m=16768&n=4298955) operation.
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


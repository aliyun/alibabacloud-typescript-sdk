// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricGroupsResponseBodyABMetricGroups extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricGroupId?: string;
  /**
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  description?: string;
  /**
   * @example
   * visits
   */
  name?: string;
  /**
   * @example
   * 2799614***
   */
  owner?: string;
  /**
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroupId: 'ABMetricGroupId',
      ABMetricIds: 'ABMetricIds',
      ABMetricNames: 'ABMetricNames',
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroupId: 'string',
      ABMetricIds: 'string',
      ABMetricNames: 'string',
      description: 'string',
      name: 'string',
      owner: 'string',
      realtime: 'boolean',
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


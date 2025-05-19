// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricGroupResponseBody extends $dara.Model {
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
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
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


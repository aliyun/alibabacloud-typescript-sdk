// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of A/B test metric IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * The metric group description.
   * 
   * This parameter is required.
   * 
   * @example
   * 访问量相关指标
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric group name.
   * 
   * This parameter is required.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * Whether the metric group is a real-time metric group.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The scene ID. You can obtain this ID by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricIds: 'ABMetricIds',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricIds: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
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


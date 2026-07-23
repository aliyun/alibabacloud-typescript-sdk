// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABMetricGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The A/B metric IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * The description of the metric group.
   * 
   * This parameter is required.
   * 
   * @example
   * 访问量相关指标
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the metric group.
   * 
   * This parameter is required.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the metric group is a real-time metric group.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The ID of the scene. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain this ID.
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


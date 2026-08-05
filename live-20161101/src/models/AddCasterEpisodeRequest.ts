// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the CasterId parameter that is returned.
   * 
   * - If you create a production studio in the LIVE console, go to the **LIVE Console**> **Production Studio** > **Production Studio** page to view the ID.
   * 
   * > The name of the production studio in the production studio list serves as the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * A list of component IDs. The components are layered from bottom to top in the specified order.
   * 
   * If you add a component by calling the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation, check the value of the ComponentId parameter that is returned.
   * 
   * - This parameter is required and applies only when the resource type is **Component**.
   * 
   * - This parameter is optional when the resource type is **Resource**. If you specify this parameter, the component is attached to the video source and they are switched synchronously.
   * 
   * > N specifies the sequence number of a component ID. For example, **ComponentId.1** specifies the first component ID and **ComponentId.2** specifies the second component ID.
   * 
   * @example
   * ["a2b8e671-2fe5-4642-a2ec-bf93880e****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The end time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * episode_1
   */
  episodeName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - **Resource**: A video source. If you set this parameter to Resource, you must also specify the ResourceId and SwitchType parameters.
   * 
   * - **Component**: A component.
   * 
   * This parameter is required.
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the video source.
   * 
   * >Notice: 
   * 
   * This parameter is required and applies only when EpisodeType is set to Resource.
   * 
   * 
   * 
   * If you add a video source by calling the [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html) operation, check the value of the ResourceId parameter that is returned.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The switch policy. Valid values:
   * 
   * >Notice: 
   * 
   * This parameter applies only when EpisodeType is set to Resource.
   * 
   * 
   * 
   * - **TimeFirst**: Time first.
   * 
   * - **ContentFirst**: Content first.
   * 
   * > For more information about video sources, see [Add a video source](https://help.aliyun.com/document_detail/66094.html).
   * 
   * This parameter is required.
   * 
   * @example
   * TimeFirst
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      componentId: 'ComponentId',
      endTime: 'EndTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      startTime: 'string',
      switchType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentId)) {
      $dara.Model.validateArray(this.componentId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


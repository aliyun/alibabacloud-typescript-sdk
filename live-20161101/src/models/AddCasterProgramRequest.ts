// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterProgramRequestEpisode extends $dara.Model {
  /**
   * @remarks
   * The component list. Elements are arranged from bottom to top in order.
   * >Notice: This parameter is valid and required when Episode.N.EpisodeType is set to **Component**.
   * 
   * 
   *  When the node type is **Resource**, this indicates that the component is bound to the video source and switches synchronously.
   * 
   * @example
   * [ "a2b8e671-2fe5-4642-a2ec-bf931826****",  "a2b8e671-2fe5-4642-a2ec-28374657****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC). This parameter is required. If not specified, MissingParameter is returned.
   * 
   * @example
   * 2016-06-29T10:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The program name.
   * 
   * @example
   * program_name_1
   */
  episodeName?: string;
  /**
   * @remarks
   * The node type. Valid values: 
   *          
   * - **Resource**: video source. If you select Resource, you must also set the request parameters Episode.N.ResourceId and Episode.N.SwitchType.
   * - **Component**: component. If you select Component, you must also set the request parameter Episode.N.ComponentId.N.
   * 
   * 
   * > 
   * > - When Resource is selected and the referenced resource contains a VodUrl (video-on-demand file), EndTime - StartTime cannot exceed the actual playback duration (in seconds) of the VOD file. Otherwise, InvalidParameter.EndTime is returned.
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  /**
   * @remarks
   * The video source ID.
   * >Notice: This parameter is valid and required when Episode.N.EpisodeType is set to **Resource**.
   *   
   *  This parameter is not applicable when Episode.N.EpisodeType is set to **Component**.
   * 
   * If you added the video source by calling the [AddCasterVideoResource operation](https://help.aliyun.com/document_detail/60250.html), check the ResourceId value returned by the AddCasterVideoResource operation.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC). This parameter is required. If not specified, MissingParameter is returned.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The switch policy. Valid values:
   * >Notice: This parameter is valid only when Episode.N.EpisodeType is set to **Resource**.
   * 
   *          
   * - **TimeFirst**: time first. Live video sources can only use the time first policy. 
   * - **ContentFirst**: content first.
   * 
   * @example
   * TimeFirst
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      endTime: 'EndTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
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

export class AddCasterProgramRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster operation](https://help.aliyun.com/document_detail/2848009.html), check the CasterId value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The program list information.
   * 
   * This parameter is required.
   */
  episode?: AddCasterProgramRequestEpisode[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episode: 'Episode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': AddCasterProgramRequestEpisode },
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.episode)) {
      $dara.Model.validateArray(this.episode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


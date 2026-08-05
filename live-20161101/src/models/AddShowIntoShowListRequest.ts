// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShowIntoShowListRequestShowList extends $dara.Model {
  /**
   * @remarks
   * The playback duration of a single show. Unit: seconds.
   * 
   * > - You can set only one of **repeatTimes** and **duration**.
   * > - This parameter is required when resourceType is set to live.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The custom type tag.
   * 
   * @example
   * 1
   */
  liveInputType?: number;
  /**
   * @remarks
   * The number of times a single show is repeated. Default value: 0.
   * 
   * >- You can set only one of **repeatTimes** and **duration**.
   * - repeatTimes specifies the number of repetitions. For example, 0 means the show is repeated 0 times (played once), 1 means the show is repeated 1 time (played twice), and so on.
   * 
   * @example
   * 0
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The VOD file ID.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - live: live streaming resource.
   * 
   * - vod: video-on-demand resource.
   * 
   * - pic: image resource.
   * 
   * >- When using video-on-demand (VOD) resources, use managed Bucket resources first. Resources in your own Bucket may expire. If you use resources in your own Bucket, check the resource validity period.
   * - Live files support live streaming resources and third-party URLs.
   * - VOD files support video-on-demand resources, image resources, and third-party URLs.
   * - When using live streaming resources, you must also specify the duration parameter.
   * 
   * @example
   * vod
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the playback file.
   */
  resourceUrl?: string;
  /**
   * @remarks
   * The show name.
   * 
   * @example
   * liveShow****
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      liveInputType: 'liveInputType',
      repeatTimes: 'repeatTimes',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      resourceUrl: 'resourceUrl',
      showName: 'showName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      liveInputType: 'number',
      repeatTimes: 'number',
      resourceId: 'string',
      resourceType: 'string',
      resourceUrl: 'string',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShowIntoShowListRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The playback duration of a single show. Unit: seconds.
   * > - You can set only one of **RepeatTimes** and **Duration**.
   * > - This parameter is required when ResourceType is set to live.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The custom type tag.
   * 
   * @example
   * 1
   */
  liveInputType?: number;
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
   * The number of times a single show is repeated. Default value: 0.
   * > - You can set only one of **RepeatTimes** and **Duration**.- RepeatTimes specifies the number of repetitions. For example, -1 means infinite repetition, 0 means the show is repeated 0 times (played once), 1 means the show is repeated 1 time (played twice), and so on.
   * 
   * @example
   * 0
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The VOD file ID.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - live: live streaming resource.
   * - vod: video-on-demand resource.
   * - pic: image resource.
   * 
   * >- When using video-on-demand (VOD) resources, use managed Bucket resources first. Resources in your own Bucket may expire. If you use resources in your own Bucket, check the resource validity period.
   * - Live files support live streaming resources and third-party URLs.
   * - VOD files support video-on-demand resources, image resources, and third-party URLs.
   * - When using live streaming resources, you must also specify the Duration parameter.
   * 
   * @example
   * vod
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the playback file.
   */
  resourceUrl?: string;
  /**
   * @remarks
   * The show name.
   * 
   * @example
   * liveShow****
   */
  showName?: string;
  /**
   * @remarks
   * The position in the playlist where the show is inserted. Positions start from 0. By default, the show is added to the end of the current playlist.
   * 
   * @example
   * 1
   */
  spot?: number;
  /**
   * @remarks
   * Specifies whether to add shows to the playlist in batch. Valid values:
   * 
   * - true: Batch addition.
   * 
   * - false: Single addition.
   * 
   * >If this parameter is not specified or left empty, single addition is used.
   * 
   * @example
   * false
   */
  isBatchMode?: boolean;
  /**
   * @remarks
   * The list of show resources to add. Each resource has independent parameters such as showName and resourceUrl.
   */
  showList?: AddShowIntoShowListRequestShowList[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      duration: 'Duration',
      liveInputType: 'LiveInputType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      repeatTimes: 'RepeatTimes',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceUrl: 'ResourceUrl',
      showName: 'ShowName',
      spot: 'Spot',
      isBatchMode: 'isBatchMode',
      showList: 'showList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      duration: 'number',
      liveInputType: 'number',
      ownerId: 'number',
      regionId: 'string',
      repeatTimes: 'number',
      resourceId: 'string',
      resourceType: 'string',
      resourceUrl: 'string',
      showName: 'string',
      spot: 'number',
      isBatchMode: 'boolean',
      showList: { 'type': 'array', 'itemType': AddShowIntoShowListRequestShowList },
    };
  }

  validate() {
    if(Array.isArray(this.showList)) {
      $dara.Model.validateArray(this.showList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


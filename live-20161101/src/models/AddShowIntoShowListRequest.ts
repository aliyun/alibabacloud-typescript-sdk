// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShowIntoShowListRequestShowList extends $dara.Model {
  /**
   * @remarks
   * The duration of the episode. Unit: seconds.
   * 
   * >  You can specify only one of the **RepeatTimes** and **Duration** parameters.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The custom type label.
   * 
   * @example
   * 1
   */
  liveInputType?: number;
  /**
   * @remarks
   * The number of times the episode repeats after the first playback is complete. Default value: 0.
   * 
   * > 
   * 
   * *   You can specify only one of the **RepeatTimes** and **Duration** parameters.
   * 
   * *   The RepeatTimes parameter specifies the number of repetitions. For example, if you set the value to 0, the episode is to be played once. If you set the value to 1, the episode is to be played twice.
   * 
   * @example
   * 0
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   live: live stream
   * *   vod: on-demand video
   * *   pic: image
   * 
   * > 
   * 
   * *   When you select media resources from ApsaraVideo VOD, we recommend that you select resources that are stored in hosted OSS buckets. Resources stored in non-hosted OSS buckets have a validity period. Pay attention to the validity if you select resources that are stored in non-hosted OSS buckets.
   * 
   * *   You can add a live stream from ApsaraVideo Live or by using a third-party URL.
   * *   You can add an on-demand video from ApsaraVideo VOD or by using a third-party URL, or add an on-demand image.
   * 
   * @example
   * vod
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the resource.
   */
  resourceUrl?: string;
  /**
   * @remarks
   * The name of the episode.
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
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The duration of the episode. Unit: seconds.
   * 
   * > You can specify only one of the **RepeatTimes** and **Duration** parameters.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The custom type label.
   * 
   * @example
   * 1
   */
  liveInputType?: number;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The number of times the episode repeats after the first playback is complete. The default value is 0.
   * 
   * > 
   * 
   * *   You can specify only one of the **RepeatTimes** and **Duration** parameters. - The RepeatTimes parameter specifies the number of repetitions. For example, if you set the value to -1, the episode is to be played for infinite times. If you set the value to 0, the episode is to be played once. If you set the value to 1, the episode is to be played twice.
   * 
   * @example
   * 0
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   live: live stream
   * *   vod: on-demand video
   * *   pic: image
   * 
   * > 
   * 
   * *   When you select media resources from ApsaraVideo VOD, we recommend that you select resources that are stored in hosted OSS buckets. Resources stored in non-hosted OSS buckets have a validity period. Pay attention to the validity if you select resources that are stored in non-hosted OSS buckets. - You can add a live stream from ApsaraVideo Live or by using a third-party URL. - You can add an on-demand video from ApsaraVideo VOD or by using a third-party URL, or add an on-demand image.
   * 
   * @example
   * vod
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the resource.
   */
  resourceUrl?: string;
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * liveShow****
   */
  showName?: string;
  /**
   * @remarks
   * The position of the episode in the episode list. Position indexes start from 0. By default, the episode is added to the end of the episode list.
   * 
   * @example
   * 1
   */
  spot?: number;
  /**
   * @remarks
   * Specifies whether to add multiple episodes to the episode list at a time. Valid values:
   * 
   * *   true: adds multiple episodes to the episode list at a time.
   * *   false: adds a single episode to the episode list.
   * 
   * > If you do not specify this parameter or this parameter is left empty, a single episode is to be added to the episode list.
   * 
   * @example
   * false
   */
  isBatchMode?: boolean;
  /**
   * @remarks
   * The episodes that you want to add to the episode list. Each episode has a unique name and resource URL.
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


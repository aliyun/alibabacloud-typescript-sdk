// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShowListResponseBodyShowListInfoShowListShowResourceInfo extends $dara.Model {
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
   * The ID of the video-on-demand (VOD) file.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
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
  static names(): { [key: string]: string } {
    return {
      liveInputType: 'LiveInputType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceUrl: 'ResourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveInputType: 'number',
      resourceId: 'string',
      resourceType: 'string',
      resourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowListResponseBodyShowListInfoShowListShow extends $dara.Model {
  /**
   * @remarks
   * The duration of the episode. Unit: seconds.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The number of times the episode repeats after the first playback is complete.
   * 
   * For example, if you set the value to 0, the episode is to be played once. If you set the value to 1, the episode is to be played twice.
   * 
   * @example
   * 5
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The resource information.
   */
  resourceInfo?: DescribeShowListResponseBodyShowListInfoShowListShowResourceInfo;
  /**
   * @remarks
   * The ID of the episode.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
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
      duration: 'Duration',
      repeatTimes: 'RepeatTimes',
      resourceInfo: 'ResourceInfo',
      showId: 'ShowId',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      repeatTimes: 'number',
      resourceInfo: DescribeShowListResponseBodyShowListInfoShowListShowResourceInfo,
      showId: 'string',
      showName: 'string',
    };
  }

  validate() {
    if(this.resourceInfo && typeof (this.resourceInfo as any).validate === 'function') {
      (this.resourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowListResponseBodyShowListInfoShowList extends $dara.Model {
  show?: DescribeShowListResponseBodyShowListInfoShowListShow[];
  static names(): { [key: string]: string } {
    return {
      show: 'Show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: { 'type': 'array', 'itemType': DescribeShowListResponseBodyShowListInfoShowListShow },
    };
  }

  validate() {
    if(Array.isArray(this.show)) {
      $dara.Model.validateArray(this.show);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowListResponseBodyShowListInfo extends $dara.Model {
  /**
   * @remarks
   * The background of the episode list.
   * 
   * @example
   * {\\"MaterialId\\":\\"a2b8e671-2fe5-4642-a2ec-bf93880e****\\",\\"resourceType\\":\\"VOD\\"}
   */
  background?: string;
  /**
   * @remarks
   * The ID of the episode that is playing.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  currentShowId?: string;
  /**
   * @remarks
   * The episode of the highest priority.
   * 
   * > You can configure this parameter only before the episode list starts playing.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  highPriorityShowId?: string;
  /**
   * @remarks
   * The time at which the episode of the highest priority is played. Format: yyyy-MM-dd\\"T\\"HH:mm:ss.
   * 
   * > You can configure this parameter only before the episode list starts playing. After you configure this parameter, when the specified point in time is reached, any episode that is playing stops and the episode of the highest priority in the episode list starts to play.
   * 
   * @example
   * 2021-11-23T12:30:00
   */
  highPriorityShowStartTime?: string;
  /**
   * @remarks
   * The episodes in the episode list.
   */
  showList?: DescribeShowListResponseBodyShowListInfoShowList;
  /**
   * @remarks
   * The number of additional times the episode list is played by default. The value is 0.
   * 
   * @example
   * 0
   */
  showListRepeatTimes?: number;
  /**
   * @remarks
   * The number of additional times the episode list is played.
   * 
   * @example
   * 1
   */
  totalShowListRepeatTimes?: number;
  static names(): { [key: string]: string } {
    return {
      background: 'Background',
      currentShowId: 'CurrentShowId',
      highPriorityShowId: 'HighPriorityShowId',
      highPriorityShowStartTime: 'HighPriorityShowStartTime',
      showList: 'ShowList',
      showListRepeatTimes: 'ShowListRepeatTimes',
      totalShowListRepeatTimes: 'TotalShowListRepeatTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      currentShowId: 'string',
      highPriorityShowId: 'string',
      highPriorityShowStartTime: 'string',
      showList: DescribeShowListResponseBodyShowListInfoShowList,
      showListRepeatTimes: 'number',
      totalShowListRepeatTimes: 'number',
    };
  }

  validate() {
    if(this.showList && typeof (this.showList as any).validate === 'function') {
      (this.showList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * ****Details of the episode list.
   * 
   * Show indicates the information about a specific episode. For more information, see the **Show** parameter.
   * 
   * @example
   * ShowList[Show1, Show2, Show3...]
   */
  showList?: string;
  /**
   * @remarks
   * The information about the episode list.
   */
  showListInfo?: DescribeShowListResponseBodyShowListInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      showList: 'ShowList',
      showListInfo: 'ShowListInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      showList: 'string',
      showListInfo: DescribeShowListResponseBodyShowListInfo,
    };
  }

  validate() {
    if(this.showListInfo && typeof (this.showListInfo as any).validate === 'function') {
      (this.showListInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


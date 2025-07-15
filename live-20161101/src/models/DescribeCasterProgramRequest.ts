// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterProgramRequest extends $dara.Model {
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the episode.
   * 
   * @example
   * 1872639A-F203-4EC5-8E43-CB92E68F****
   */
  episodeId?: string;
  /**
   * @remarks
   * The type of the episode. Valid values:
   * 
   * *   **Resource**: a video resource
   * *   **Component**: a component
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the episode. Valid values:
   * 
   * *   **0**: The episode is not played.
   * *   **1**: The episode is being played.
   * *   **2**: The playback of the episode is complete.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      endTime: 'EndTime',
      episodeId: 'EpisodeId',
      episodeType: 'EpisodeType',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      endTime: 'string',
      episodeId: 'string',
      episodeType: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


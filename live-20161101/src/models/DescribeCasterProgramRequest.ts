// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterProgramRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned in the response.
   * 
   * - If you create a production studio in the LIVE console, find the ID on the Cloud Production Studio page. To go to this page, choose **LIVE** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The end time. The time must be in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2016-06-29T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the program.
   * 
   * @example
   * 1872639A-F203-4EC5-8E43-CB92E68F****
   */
  episodeId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * - **Resource**: video source.
   * 
   * - **Component**: component.
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
   * The number of programs on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. The time must be in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the program. Valid values:
   * 
   * - **0**: not started
   * 
   * - **1**: playing
   * 
   * - **2**: finished
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


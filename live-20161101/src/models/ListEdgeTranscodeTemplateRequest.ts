// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * ******3b-4d18-395c-8106-ff21a6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The keyword of the query.
   * 
   * *   You can specify a template ID for an exact match.
   * *   You can also specify a template name for a fuzzy match.
   * 
   * @example
   * baseline
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The sorting order of the templates by creation time. Default value: desc. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of edge transcoding. Valid values:
   * 
   * *   **common**: standard transcoding and Narrowband HD™ 1.0 transcoding.
   * *   **nbhd-2**: Narrowband HD™ 2.0 transcoding.
   * *   **ultra-hd**: ultra-high definition transcoding.
   * 
   * >  If you do not specify this parameter, the query result is filtered based on the type of edge transcoding on which you are granted permissions.
   * 
   * @example
   * nbhd-2
   */
  type?: string;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * 
   * *   H.264
   * *   H.265
   * 
   * >  If you do not specify this parameter, the query result is filtered based on the video encoding format on which you are granted permissions.
   * 
   * @example
   * H.264
   */
  videoCodec?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      type: 'Type',
      videoCodec: 'VideoCodec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      type: 'string',
      videoCodec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The data center ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ******3b-4d18-395c-8106-ff21a6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The search keyword. Valid values:
   * - Template ID. Exact match is supported.
   * - Template name. Fuzzy match is supported.
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The sorting rule. Templates are sorted by creation time (CreateTime). Default value: desc. Valid values:
   * - desc: descending order.
   * - asc: ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The edge transcoding type. Valid values:
   * - **common**: default transcoding (standard + Narrowband HD 1.0).
   * - **nbhd-2**: Narrowband HD 2.0.
   * - **ultra-hd**: ultra-high definition.
   * 
   * > If this parameter is not specified, the system displays transcoding templates for the transcoding types that the user has permissions to access.
   * 
   * @example
   * nbhd-2
   */
  type?: string;
  /**
   * @remarks
   * The video encoding format. Valid values:
   * - H.264.
   * - H.265.
   * 
   * > If this parameter is not specified, the system displays transcoding templates for the video encoding formats that the user has permissions to access.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModifiedRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-bd53sfmysz8ir****
   */
  desktopId?: string;
  /**
   * @remarks
   * Number of entries per page for paged queries.
   * 
   * - Maximum: 100.
   * 
   * - Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token. Set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l3d+SWeOobbIlDLjwhjkTk
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to list regions that support WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


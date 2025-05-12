// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModifiedRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-bd53sfmysz8ir****
   */
  desktopId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * *   Maximum value: 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l3d+SWeOobbIlDLjwhjkTk
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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


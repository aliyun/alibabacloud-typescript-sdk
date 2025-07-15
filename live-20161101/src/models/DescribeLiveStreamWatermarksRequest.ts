// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the main streaming domain.
   * 
   * @example
   * live.yourdomain.com
   */
  domain?: string;
  /**
   * @remarks
   * The keyword used in the query. You can specify the template ID or name. Fuzzy search is supported for the name.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of templates per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      keyWord: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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


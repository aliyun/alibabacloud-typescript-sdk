// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarksRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * live.yourdomain.com
   */
  domain?: string;
  /**
   * @remarks
   * The keyword for the search. You can specify a template ID or name. Fuzzy search is supported for names.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of templates to return on each page. The default value is 100.
   * 
   * @example
   * 100
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


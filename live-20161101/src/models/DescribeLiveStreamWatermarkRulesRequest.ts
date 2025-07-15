// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarkRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * live.yourdomain.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. If you do not specify this parameter, the default value 1 is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. If you do not specify this parameter, the default value 100 is used.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
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


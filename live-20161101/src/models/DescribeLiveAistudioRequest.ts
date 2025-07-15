// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAIStudioRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the virtual studio template that you want to query. This parameter is optional.
   * 
   * @example
   * dbe61b87-db9a-448f-8757-a875edb3f944
   */
  studioId?: string;
  /**
   * @remarks
   * The name of the virtual studio template.
   * 
   * @example
   * sub02
   */
  studioName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      studioId: 'StudioId',
      studioName: 'StudioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      studioId: 'string',
      studioName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


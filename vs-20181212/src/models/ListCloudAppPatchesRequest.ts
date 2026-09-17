// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppPatchesRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID, which corresponds to a unique application package.
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The start time for time range filtering. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number of the list to query. Minimum value: 1.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the patch package.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The name of the patch package.
   * 
   * @example
   * patch-1
   */
  patchName?: string;
  /**
   * @remarks
   * The start time for time range filtering. Specify the time in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2015-11-29T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      patchName: 'PatchName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      patchName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


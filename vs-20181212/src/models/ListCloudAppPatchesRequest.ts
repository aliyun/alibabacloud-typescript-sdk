// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppPatchesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @example
   * patch-1
   */
  patchName?: string;
  /**
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


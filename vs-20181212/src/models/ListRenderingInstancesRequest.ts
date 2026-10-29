// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The time range filter parameter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number Settings for paging during a paged query. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page Settings for paging during a paged query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The instance type of the cloud application service instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The time range filter parameter. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-10-31T07:59:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * The instance storage capacity of the cloud application service.
   * 
   * @example
   * 20
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      startTime: 'StartTime',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      startTime: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


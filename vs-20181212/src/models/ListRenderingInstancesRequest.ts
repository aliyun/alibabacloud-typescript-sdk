// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The time range for filtering. The time must be in UTC and specified in the ISO 8601 format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number for the paged query. Minimum value: 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page for the paged query. Valid values: 1 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the cloud application service instance
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Instance type of the cloud application service
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * Start time of the time range filter. Specify the time in ISO 8601 format in UTC. Format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2021-10-31T07:59:59Z
   */
  startTime?: string;
  /**
   * @remarks
   * Storage capacity of the cloud application service instance
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The time range for filtering. The time must be in ISO 8601 format and in UTC, such as \\`yyyy-MM-ddTHH:mm:ssZ\\`.
   * 
   * @example
   * 2025-05-20T12:23:02Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @remarks
   * The page number of the list to query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * This parameter specifies the time range filter. The time must be in ISO 8601 format and UTC time, such as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-18T02:20:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      gatewayInstanceId: 'GatewayInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      gatewayInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
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


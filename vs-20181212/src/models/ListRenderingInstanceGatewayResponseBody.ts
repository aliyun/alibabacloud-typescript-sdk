// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos extends $dara.Model {
  /**
   * @remarks
   * The creation time of the cloud application service instance. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-10-15 10:19:13
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID of the custom gateway.
   * 
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The status of the custom gateway. Valid values:
   * - Intermediate states: creating and deleting. 
   * - Final states: available and failed.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The update time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-11-02 12:08:26
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      gatewayInstanceId: 'GatewayInstanceId',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      gatewayInstanceId: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstanceGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom gateway information.
   */
  gatewayConfigurationInfos?: ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page in the paging Settings for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of installation records.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayConfigurationInfos: 'GatewayConfigurationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayConfigurationInfos: { 'type': 'array', 'itemType': ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayConfigurationInfos)) {
      $dara.Model.validateArray(this.gatewayConfigurationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos extends $dara.Model {
  /**
   * @remarks
   * The time when the cloud application service instance was created.
   * 
   * @example
   * 2024-10-15 10:19:13
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the custom gateway instance.
   * 
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The status of the custom gateway. Valid values:
   * 
   * 1. Transitional states: creating, deleting
   * 
   * 2. Desired states: available, failed
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The time when the information was last updated.
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
   * A list of custom gateway information.
   */
  gatewayConfigurationInfos?: ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos[];
  /**
   * @remarks
   * The page number of the query results list
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
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
   * The total number of records.
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


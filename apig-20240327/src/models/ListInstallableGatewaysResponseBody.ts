// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstallableGatewaysResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The gateway DPI engine version.
   * 
   * @example
   * 2.1.10
   */
  engineVersion?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway status. This is a pass-through of the GatewayPhase enum, such as Running or Creating.
   * 
   * @example
   * Running
   */
  gatewayPhase?: string;
  /**
   * @remarks
   * Indicates whether the gateway is installable.
   * 
   * @example
   * true
   */
  installable?: boolean;
  /**
   * @remarks
   * The reason why the gateway is not installable.
   * 
   * @example
   * VERSION_NOT_MATCH
   */
  installableFalseReasonType?: string;
  /**
   * @remarks
   * The version number of another plug-in of the same class that is already installed on the gateway.
   * 
   * @example
   * 1.0.0
   */
  installedPluginVersion?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * my-gateway
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'engineVersion',
      gatewayId: 'gatewayId',
      gatewayPhase: 'gatewayPhase',
      installable: 'installable',
      installableFalseReasonType: 'installableFalseReasonType',
      installedPluginVersion: 'installedPluginVersion',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      gatewayId: 'string',
      gatewayPhase: 'string',
      installable: 'boolean',
      installableFalseReasonType: 'string',
      installedPluginVersion: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstallableGatewaysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list.
   */
  items?: ListInstallableGatewaysResponseBodyDataItems[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 43
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListInstallableGatewaysResponseBodyDataItems },
      pageNumber: 'string',
      pageSize: 'string',
      totalSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstallableGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListInstallableGatewaysResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019FA163-3664-5D34-81D1-5FFFC94AD7D5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstallableGatewaysResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstallableGatewaysResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2.1.10
   */
  engineVersion?: string;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * Running
   */
  gatewayPhase?: string;
  /**
   * @example
   * true
   */
  installable?: boolean;
  /**
   * @example
   * VERSION_NOT_MATCH
   */
  installableFalseReasonType?: string;
  /**
   * @example
   * 1.0.0
   */
  installedPluginVersion?: string;
  /**
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
  items?: ListInstallableGatewaysResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListInstallableGatewaysResponseBodyData;
  /**
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


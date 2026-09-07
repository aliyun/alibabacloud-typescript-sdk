// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusGlobalViewByAliClusterIdsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   * 
   * @example
   * {regionId: 实例所属region, globalViewClusterId: 实例Id, failedClusterIds: 添加失败的AliClusterId（一般是clusterId有误，或者跨大洲添加）}
   */
  info?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      msg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewByAliClusterIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The HTTP 200 status code indicates a successful request, while others indicate error conditions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   */
  data?: AddPrometheusGlobalViewByAliClusterIdsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 3A0EA2AF-C9B3-555C-B9D5-5DD8F5EF98A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddPrometheusGlobalViewByAliClusterIdsResponseBodyData,
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


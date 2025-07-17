// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAliClusterIdsToPrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   * 
   * @example
   * {regionId: the region where the aggregation instance resides. globalViewClusterId: the ID of the aggregation instance. failedClusterIds: the ID of the cluster that failed to be added. A cluster may fail to be added because the specified cluster ID is invalid or the cluster is added across continents.}
   */
  info?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

export class AddAliClusterIdsToPrometheusGlobalViewResponseBody extends $dara.Model {
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
   * The information about the array object.
   */
  data?: AddAliClusterIdsToPrometheusGlobalViewResponseBodyData;
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
   * F7781D4A-2818-41E7-B7BB-79D809E9****
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
      data: AddAliClusterIdsToPrometheusGlobalViewResponseBodyData,
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


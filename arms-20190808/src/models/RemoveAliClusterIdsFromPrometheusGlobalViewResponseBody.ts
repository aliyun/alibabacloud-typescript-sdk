// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   * 
   * @example
   * {regionId: the region where the global aggregation instance resides. globalViewClusterId: the ID of the global aggregation instance. failedClusterIds: the IDs of the clusters that failed to be added. A cluster may fail to be added if the specified cluster ID is invalid.}
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

export class RemoveAliClusterIdsFromPrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData;
  /**
   * @remarks
   * The message returned.
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
      data: RemoveAliClusterIdsFromPrometheusGlobalViewResponseBodyData,
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


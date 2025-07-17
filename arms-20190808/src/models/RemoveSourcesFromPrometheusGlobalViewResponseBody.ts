// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSourcesFromPrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   * 
   * @example
   * {regionId: the region where the aggregation instance resides. globalViewClusterId: the ID of the aggregation instance.
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
   * True
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

export class RemoveSourcesFromPrometheusGlobalViewResponseBody extends $dara.Model {
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
   * The returned struct.
   */
  data?: RemoveSourcesFromPrometheusGlobalViewResponseBodyData;
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
   * 9319A57D-2D9E-472A-B69B-CF3CD16D****
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
      data: RemoveSourcesFromPrometheusGlobalViewResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendInstancesToPrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   * 
   * @example
   * {regionId: the region where the aggregation instance resides. globalViewClusterId: the ID of the aggregation instance. failedInstances: the ID of the object that failed to be added.}
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
   * Indicates whether the call was successful. Valid values:
   * 
   * *   `true`: The call was successful.
   * *   `false`: The call failed.
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

export class AppendInstancesToPrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. 200 means success, other status codes are exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the array object.
   */
  data?: AppendInstancesToPrometheusGlobalViewResponseBodyData;
  /**
   * @remarks
   * Additional message.
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
   * 27E653FA-5958-45BE-8AA9-14D884DC****
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
      data: AppendInstancesToPrometheusGlobalViewResponseBodyData,
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


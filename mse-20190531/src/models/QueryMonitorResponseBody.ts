// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The prefix of the name.
   * 
   * @example
   * mse-xxxx-xxxxxx
   */
  clusterNamePrefix?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * mse-xxxxxx-xxxxxx-reg-center-0-0
   */
  podName?: string;
  /**
   * @remarks
   * The details of the data.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      clusterNamePrefix: 'clusterNamePrefix',
      podName: 'podName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNamePrefix: 'string',
      podName: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * 6
   */
  data?: QueryMonitorResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADDD8AB7-8D1C-4697-A83E-410D2607****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryMonitorResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRenderingServerResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 300000
   */
  errCode?: number;
  /**
   * @remarks
   * Reason for failure
   * 
   * @example
   * Rejected due to timeout
   */
  errMessage?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-421cd2a1125947c19fcd5c7dd2c7d31e
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'number',
      errMessage: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootRenderingServerResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-e6cf423c787e4e43b460a788da254fe3
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootRenderingServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of cloud application service instances that failed to restart
   * 
   * @example
   * 0
   */
  failedInstanceCount?: number;
  /**
   * @remarks
   * Cloud application service instance IDs and their failure details
   */
  failedInstances?: RebootRenderingServerResponseBodyFailedInstances[];
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
   * Number of successful cloud application service instances
   * 
   * @example
   * 5
   */
  successInstanceCount?: number;
  /**
   * @remarks
   * The instance ID of the cloud application service and the description of the result.
   */
  successInstances?: RebootRenderingServerResponseBodySuccessInstances[];
  static names(): { [key: string]: string } {
    return {
      failedInstanceCount: 'FailedInstanceCount',
      failedInstances: 'FailedInstances',
      requestId: 'RequestId',
      successInstanceCount: 'SuccessInstanceCount',
      successInstances: 'SuccessInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstanceCount: 'number',
      failedInstances: { 'type': 'array', 'itemType': RebootRenderingServerResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': RebootRenderingServerResponseBodySuccessInstances },
    };
  }

  validate() {
    if(Array.isArray(this.failedInstances)) {
      $dara.Model.validateArray(this.failedInstances);
    }
    if(Array.isArray(this.successInstances)) {
      $dara.Model.validateArray(this.successInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


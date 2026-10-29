// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallCloudAppResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The error code for the failure.
   * 
   * @example
   * 300000
   */
  errCode?: number;
  /**
   * @remarks
   * The cause of the failure.
   * 
   * @example
   * Rejected due to timeout
   */
  errMessage?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-b45f28650ffe4591bf4c5c95996a428c
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

export class UninstallCloudAppResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * The cloud application service instance ID.
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

export class UninstallCloudAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of cloud application service instances on which the operation failed.
   * 
   * @example
   * 0
   */
  failedInstanceCount?: number;
  /**
   * @remarks
   * The list of cloud application service instances on which the operation failed.
   */
  failedInstances?: UninstallCloudAppResponseBodyFailedInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The number of cloud application service instances on which the operation succeeded.
   * 
   * @example
   * 5
   */
  successInstanceCount?: number;
  /**
   * @remarks
   * The list of cloud application service instances on which the operation succeeded.
   */
  successInstances?: UninstallCloudAppResponseBodySuccessInstances[];
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
      failedInstances: { 'type': 'array', 'itemType': UninstallCloudAppResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': UninstallCloudAppResponseBodySuccessInstances },
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


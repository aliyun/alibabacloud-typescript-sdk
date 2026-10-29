// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudAppResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The failure error code.
   * 
   * @example
   * 300000
   */
  errCode?: number;
  /**
   * @remarks
   * The failure reason information.
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

export class InstallCloudAppResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-5130e2feb23f442fb9456a3d977f03d4
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

export class InstallCloudAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of failed cloud application service instances.
   * 
   * @example
   * 0
   */
  failedInstanceCount?: number;
  /**
   * @remarks
   * The list of failed cloud application service instances.
   */
  failedInstances?: InstallCloudAppResponseBodyFailedInstances[];
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
   * The number of successful cloud application service instances.
   * 
   * @example
   * 5
   */
  successInstanceCount?: number;
  /**
   * @remarks
   * The list of successful cloud application service instances.
   */
  successInstances?: InstallCloudAppResponseBodySuccessInstances[];
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
      failedInstances: { 'type': 'array', 'itemType': InstallCloudAppResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': InstallCloudAppResponseBodySuccessInstances },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallCloudAppResponseBodyFailedInstances extends $dara.Model {
  errCode?: number;
  errMessage?: string;
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
  failedInstanceCount?: number;
  failedInstances?: UninstallCloudAppResponseBodyFailedInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  successInstanceCount?: number;
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


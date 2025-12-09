// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRenderingServerResponseBodyFailedInstances extends $dara.Model {
  /**
   * @example
   * 300000
   */
  errCode?: number;
  /**
   * @example
   * Rejected due to timeout
   */
  errMessage?: string;
  /**
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
   * @example
   * 0
   */
  failedInstanceCount?: number;
  failedInstances?: RebootRenderingServerResponseBodyFailedInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  successInstanceCount?: number;
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


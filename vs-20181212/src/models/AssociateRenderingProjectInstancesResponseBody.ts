// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRenderingProjectInstancesResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * Failure reason
   * 
   * @example
   * invalid id
   */
  message?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-b45f28650ffe4591bf4c5c95996a428c
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class AssociateRenderingProjectInstancesResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-5130e2feb23f442fb9456a3d977f03d4
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class AssociateRenderingProjectInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of failed cloud application service instances
   * 
   * @example
   * 0
   */
  failedInstanceCount?: string;
  /**
   * @remarks
   * List of instances that failed to associate
   */
  failedInstances?: AssociateRenderingProjectInstancesResponseBodyFailedInstances[];
  /**
   * @remarks
   * Request ID.
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
  successInstanceCount?: string;
  /**
   * @remarks
   * List of successfully associated instances
   */
  successInstances?: AssociateRenderingProjectInstancesResponseBodySuccessInstances[];
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
      failedInstanceCount: 'string',
      failedInstances: { 'type': 'array', 'itemType': AssociateRenderingProjectInstancesResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'string',
      successInstances: { 'type': 'array', 'itemType': AssociateRenderingProjectInstancesResponseBodySuccessInstances },
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


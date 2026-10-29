// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRenderingProjectInstancesResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The cause of the failure.
   * 
   * @example
   * invalid id
   */
  message?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
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
   * The description.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
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
   * The number of cloud application service instances that failed to be associated.
   * 
   * @example
   * 0
   */
  failedInstanceCount?: string;
  /**
   * @remarks
   * The list of instances that failed to be associated.
   */
  failedInstances?: AssociateRenderingProjectInstancesResponseBodyFailedInstances[];
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
   * The number of successfully associated cloud application service instances.
   * 
   * @example
   * 5
   */
  successInstanceCount?: string;
  /**
   * @remarks
   * The list of successfully associated instances.
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


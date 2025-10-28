// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sAppPrecheckResultResponseBodyDataJobResults extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the precheck of the item was interrupted:
   * 
   * *   true: The precheck of the item was interrupted.
   * *   false: The precheck of the item was not interrupted.
   * 
   * @example
   * false
   */
  interrupted?: boolean;
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * Cluster Health Check
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the precheck item passed the precheck:
   * 
   * *   true: The precheck item passed the precheck.
   * *   false: The precheck item failed the precheck.
   * 
   * @example
   * true
   */
  pass?: boolean;
  /**
   * @remarks
   * The reason why the precheck item failed the precheck or the precheck of the item was interrupted. This parameter is left empty when the application passed the precheck.
   * 
   * @example
   * The Kubernetes cluster is disconnected from the EDAS control plane.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      interrupted: 'Interrupted',
      name: 'Name',
      pass: 'Pass',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interrupted: 'boolean',
      name: 'string',
      pass: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The precheck result for the application change.
   */
  jobResults?: GetK8sAppPrecheckResultResponseBodyDataJobResults[];
  /**
   * @remarks
   * The reason why the application failed the precheck. This parameter is left empty when the application passed the precheck.
   * 
   * @example
   * The Kubernetes cluster is disconnected from the EDAS control plane.
   */
  reason?: string;
  /**
   * @remarks
   * The precheck state for the application change. Valid values:
   * 
   * *   checking: The application is being prechecked.
   * *   pass: The application passed the precheck.
   * *   failed: The application failed the precheck.
   * 
   * @example
   * checking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobResults: 'JobResults',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResults: { 'type': 'array', 'itemType': GetK8sAppPrecheckResultResponseBodyDataJobResults },
      reason: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobResults)) {
      $dara.Model.validateArray(this.jobResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sAppPrecheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: GetK8sAppPrecheckResultResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B909AB1F-3763-4963-B1CE-0BDFA192****
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
      data: GetK8sAppPrecheckResultResponseBodyData,
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


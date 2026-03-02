// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobFailure extends $dara.Model {
  /**
   * @remarks
   * The time when the deployment fails.
   * 
   * @example
   * 1660120062
   */
  failedAt?: number;
  /**
   * @remarks
   * The details of the failure.
   * 
   * @example
   * Kubernetes deployment resource with name job-8b7db913-5b1f-4ac5-a332-8d50f342**** is not progressing.
   */
  message?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * KubernetesDeploymentNotProgressing
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failedAt: 'failedAt',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedAt: 'number',
      message: 'string',
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


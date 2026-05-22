// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentResponseBodyCodeVersions extends $dara.Model {
  /**
   * @remarks
   * The version of the code.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
   * The phased release ratio.
   * 
   * @example
   * 100
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineCodeDeploymentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration list of the phased release version number.
   */
  codeVersions?: CreateRoutineCodeDeploymentResponseBodyCodeVersions[];
  /**
   * @remarks
   * The deployment record ID.
   * 
   * @example
   * 234
   */
  deploymentId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * The phased release policy. The constant string is "percentage".
   * 
   * @example
   * percentage
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersions: 'CodeVersions',
      deploymentId: 'DeploymentId',
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersions: { 'type': 'array', 'itemType': CreateRoutineCodeDeploymentResponseBodyCodeVersions },
      deploymentId: 'string',
      requestId: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codeVersions)) {
      $dara.Model.validateArray(this.codeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


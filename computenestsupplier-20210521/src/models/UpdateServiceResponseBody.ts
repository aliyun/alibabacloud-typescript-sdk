// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * The Actions.
   */
  action?: string[];
  /**
   * @remarks
   * The responses.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyDryRunResultRolePolicy extends $dara.Model {
  /**
   * @remarks
   * The missing  ram policy for deploying role.
   */
  missingPolicy?: UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy[];
  /**
   * @remarks
   * The required ram policy for deploying role.
   * 
   * @example
   * {
   * 	"Statement": [{
   * 		"Action": ["oos:CancelExecutions", "oos:DeleteExecutions", "oos:GetTemplate", "oos:ListExecutions", "oos:ListTemplates", "oos:NotifyExecution", "oos:StartExecution"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ram:PassRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}, {
   * 		"Action": ["ros:CreateStack", "ros:GetStack", "ros:UpdateStack", "ros:ListStackEvents", "ros:ListStackResources", "ros:ListStackResources", "ros:DeleteStack", "ram:GetRole"],
   * 		"Effect": "Allow",
   * 		"Resource": "*"
   * 	}],
   * 	"Version": "1"
   * }
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy },
      policy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The required ram policy for deploying role.
   */
  rolePolicy?: UpdateServiceResponseBodyDryRunResultRolePolicy;
  static names(): { [key: string]: string } {
    return {
      rolePolicy: 'RolePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePolicy: UpdateServiceResponseBodyDryRunResultRolePolicy,
    };
  }

  validate() {
    if(this.rolePolicy && typeof (this.rolePolicy as any).validate === 'function') {
      (this.rolePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: UpdateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The hosted O\\&M configurations.
   * 
   * @example
   * DF0F666F-FBBC-55C3-A368-C955DE7B4839
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: UpdateServiceResponseBodyDryRunResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


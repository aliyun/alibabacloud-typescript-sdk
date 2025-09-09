// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * The Actions.
   */
  action?: string[];
  /**
   * @remarks
   * Resource in ram policy.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The service name in ram policy.
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

export class CreateServiceResponseBodyDryRunResultRolePolicy extends $dara.Model {
  /**
   * @remarks
   * The missing ram policy for deploying role.
   */
  missingPolicy?: CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy[];
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
      missingPolicy: { 'type': 'array', 'itemType': CreateServiceResponseBodyDryRunResultRolePolicyMissingPolicy },
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

export class CreateServiceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The required ram policy for deploying role.
   */
  rolePolicy?: CreateServiceResponseBodyDryRunResultRolePolicy;
  static names(): { [key: string]: string } {
    return {
      rolePolicy: 'RolePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePolicy: CreateServiceResponseBodyDryRunResultRolePolicy,
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

export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: CreateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: CreateServiceResponseBodyDryRunResult,
      requestId: 'string',
      serviceId: 'string',
      status: 'string',
      version: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy } from "./UpdateServiceResponseBodyDryRunResultRolePolicyMissingPolicy";


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


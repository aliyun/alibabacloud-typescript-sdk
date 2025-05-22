// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewStackResponseBodyStackLog } from "./PreviewStackResponseBodyStackLog";
import { PreviewStackResponseBodyStackParameters } from "./PreviewStackResponseBodyStackParameters";
import { PreviewStackResponseBodyStackResources } from "./PreviewStackResponseBodyStackResources";


export class PreviewStackResponseBodyStack extends $dara.Model {
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * One ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled for the resources when the stack fails to be created.
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The log that is generated when the stack is run.
   */
  log?: PreviewStackResponseBodyStackLog;
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: PreviewStackResponseBodyStackParameters[];
  /**
   * @remarks
   * The region where the stack resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources in the stack.
   */
  resources?: PreviewStackResponseBodyStackResources[];
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body.
   * 
   * @example
   * {   "Statement": [     {       "Action": "Update:*",       "Resource": "*",       "Effect": "Allow",       "Principal": "*"     },     {       "Action": "Update:*",       "Resource": "LogicalResourceId/apple1",       "Effect": "Deny",       "Principal": "*"     }   ] }
   */
  stackPolicyBody?: { [key: string]: any };
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * One ECS instance.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The timeout period for creating the stack.
   * 
   * Unit: minutes.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disableRollback: 'DisableRollback',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resources: 'Resources',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      templateDescription: 'TemplateDescription',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableRollback: 'boolean',
      log: PreviewStackResponseBodyStackLog,
      parameters: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackParameters },
      regionId: 'string',
      resources: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackResources },
      stackName: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateDescription: 'string',
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(this.stackPolicyBody) {
      $dara.Model.validateMap(this.stackPolicyBody);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


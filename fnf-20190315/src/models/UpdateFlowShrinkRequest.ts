// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The definition of the workflow. The definition must comply with the flow definition language (FDL) syntax. Considering compatibility, the system supports the two workflow definition specifications.
   * 
   * >  In the preceding workflow definition example, Name:my_flow_name is the workflow name, which must be consistent with the input parameter Name
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n  - type: pass\\n    name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test definition
   */
  description?: string;
  environmentShrink?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, the flow execution engine assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow. Valid value: **FDL**.
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      environmentShrink: 'Environment',
      name: 'Name',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      environmentShrink: 'string',
      name: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


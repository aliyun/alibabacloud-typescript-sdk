// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The definition of the workflow. The definition must comply with the flow definition language (FDL) syntax. Considering compatibility, the system supports two flow definition specifications.
   * 
   * >  In the preceding flow definition example, Name:my_flow_name is the workflow name, which must be consistent with the input parameter Name
   * 
   * This parameter is required.
   * 
   * @example
   * version:&nbsp;v1.0<br/>type:&nbsp;flow<br/>steps:<br/>&nbsp;-&nbsp;type:&nbsp;pass<br/>&nbsp;name:&nbsp;mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * test flow
   */
  description?: string;
  environmentShrink?: string;
  /**
   * @remarks
   * The execution mode. Valid values: Express and Standard. Considering compatibility, an empty string is equivalent to the Standard execution mode.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The path of the external storage.
   * 
   * @example
   * /path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * The name of the flow. The name is unique within the same region and cannot be modified after the flow is created. Set this parameter based on the following rules:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram:${region}:${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow. Set this parameter to **FDL**.
   * 
   * This parameter is required.
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
      executionMode: 'ExecutionMode',
      externalStorageLocation: 'ExternalStorageLocation',
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
      executionMode: 'string',
      externalStorageLocation: 'string',
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


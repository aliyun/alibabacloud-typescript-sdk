// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group that is associated with the business process in the API Gateway console. You can log on to the API Gateway console and go to the Group Details page to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000abcd
   */
  apiGatewayGroupId?: string;
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * Test business process
   */
  description?: string;
  /**
   * @remarks
   * The name of the business process.
   * 
   * This parameter is required.
   * 
   * @example
   * Business process name
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. This parameter is deprecated.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiGatewayGroupId: 'ApiGatewayGroupId',
      description: 'Description',
      groupName: 'GroupName',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayGroupId: 'string',
      description: 'string',
      groupName: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


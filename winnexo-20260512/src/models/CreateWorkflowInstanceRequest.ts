// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The required acceptance criteria for the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * Complete all approval nodes and generate the report
   */
  acceptanceCriteria?: string;
  /**
   * @remarks
   * The unique requirement ID in the workspace. Repeated requests are idempotent.
   * 
   * This parameter is required.
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The display label of the external initiator.
   * 
   * @example
   * External Initiator Zhang San
   */
  initiator?: string;
  /**
   * @remarks
   * The work item priority.
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * The workflow template ID. Maximum length: 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * wft_20261016_abc123
   */
  templateId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter explicitly passed by using --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The requirement title.
   * 
   * This parameter is required.
   * 
   * @example
   * Quarterly Business Analysis Report
   */
  title?: string;
  /**
   * @remarks
   * The business variable object. The tags field can be a list of string tags.
   * 
   * @example
   * tags=Quarterly Report
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      businessId: 'businessId',
      collaborationGroupId: 'collaborationGroupId',
      initiator: 'initiator',
      priority: 'priority',
      templateId: 'templateId',
      tenantId: 'tenantId',
      title: 'title',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      businessId: 'string',
      collaborationGroupId: 'string',
      initiator: 'string',
      priority: 'string',
      templateId: 'string',
      tenantId: 'string',
      title: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


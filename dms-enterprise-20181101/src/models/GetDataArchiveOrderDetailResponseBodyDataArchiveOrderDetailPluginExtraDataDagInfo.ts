// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDagInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the task flow.
   * 
   * @example
   * 59****
   */
  creatorId?: string;
  /**
   * @remarks
   * The start time for scheduling. The task flow is not scheduled before this point in time.
   * 
   * @example
   * 1970-01-01
   */
  cronBeginDate?: string;
  /**
   * @remarks
   * The end time for scheduling. The task flow is not scheduled after this point in time.
   * 
   * @example
   * 9999-01-01
   */
  cronEndDate?: string;
  /**
   * @remarks
   * Indicates whether the archiving task is a scheduled task. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  cronTrigger?: boolean;
  /**
   * @remarks
   * Indicates whether the task is used to develop warehouses.
   * 
   * >  This field is a retained field that is not in use.
   * 
   * @example
   * false
   */
  DWDevelop?: boolean;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * data-archive-9099197
   */
  dagName?: string;
  /**
   * @remarks
   * The ID of the owner of the workflow.
   * 
   * @example
   * 13****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The ID of the deployment record.
   * 
   * @example
   * 93***
   */
  deployId?: number;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * order id:9099197
   */
  description?: string;
  /**
   * @remarks
   * The ID of the editable workflow version.
   * 
   * @example
   * 24***
   */
  editDagId?: number;
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2023-05-15 16:00:48
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the workflow was last modified.
   * 
   * @example
   * 2023-06-15 16:00:48
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the workflow is public. Valid values:
   * 
   * *   **0**: not public.
   * *   **1**: public.
   * 
   * @example
   * 0
   */
  isPublic?: number;
  /**
   * @remarks
   * Indicates whether the task is a historical task. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @remarks
   * Indicates whether the task was created by the system. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 5***
   */
  tenantId?: string;
  /**
   * @remarks
   * Indicates whether the workflow is triggered to run once. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  triggerOnce?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      cronBeginDate: 'CronBeginDate',
      cronEndDate: 'CronEndDate',
      cronTrigger: 'CronTrigger',
      DWDevelop: 'DWDevelop',
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      deployId: 'DeployId',
      description: 'Description',
      editDagId: 'EditDagId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isPublic: 'IsPublic',
      legacy: 'Legacy',
      system: 'System',
      tenantId: 'TenantId',
      triggerOnce: 'TriggerOnce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      cronBeginDate: 'string',
      cronEndDate: 'string',
      cronTrigger: 'boolean',
      DWDevelop: 'boolean',
      dagName: 'string',
      dagOwnerId: 'string',
      deployId: 'number',
      description: 'string',
      editDagId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isPublic: 'number',
      legacy: 'boolean',
      system: 'boolean',
      tenantId: 'string',
      triggerOnce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


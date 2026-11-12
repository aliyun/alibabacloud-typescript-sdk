// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CmsV1MigrationTaskView extends $dara.Model {
  /**
   * @remarks
   * The migration batch ID.
   * 
   * @example
   * 00112233-4455-4677-8899-aabbccddeeff
   */
  batchId?: string;
  /**
   * @remarks
   * Indicates whether to provide a recovery prompt for existing frozen tasks. This field does not grant authorization. Each recovery re-verifies the original bindings. Tasks with the SUCCESS status are not retried.
   * 
   * @example
   * false
   */
  canRecover?: boolean;
  /**
   * @remarks
   * The task failure description.
   * 
   * @example
   * UNSUPPORTED_RESOURCE: source members cannot be translated without loss
   */
  errorMessage?: string;
  /**
   * @remarks
   * The source application group name.
   * 
   * @example
   * order-service
   */
  groupName?: string;
  /**
   * @remarks
   * The target observation group ID.
   * 
   * @example
   * og-0123456789abcdef
   */
  observeGroupId?: string;
  /**
   * @remarks
   * The source CloudMonitor 1.0 application group ID.
   * 
   * @example
   * 247675311
   */
  originGroupId?: string;
  /**
   * @remarks
   * Indicates whether the source 1.0 group is persistently set to read-only.
   * 
   * @example
   * false
   */
  sourceReadOnly?: boolean;
  /**
   * @remarks
   * The migration task status. Valid values: PENDING, RUNNING, SUCCESS, SKIPPED, and FAILED.
   * 
   * @example
   * FAILED
   */
  status?: string;
  /**
   * @remarks
   * The takeover stage. Valid values: PENDING, SOURCE_LOCKED, TARGET_CREATED, READ_ONLY, and NEEDS_REVIEW.
   * 
   * @example
   * SOURCE_LOCKED
   */
  takeoverStage?: string;
  /**
   * @remarks
   * The target observation group name.
   * 
   * @example
   * order-service
   */
  targetGroupName?: string;
  /**
   * @remarks
   * The migration task ID.
   * 
   * @example
   * 3
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      canRecover: 'canRecover',
      errorMessage: 'errorMessage',
      groupName: 'groupName',
      observeGroupId: 'observeGroupId',
      originGroupId: 'originGroupId',
      sourceReadOnly: 'sourceReadOnly',
      status: 'status',
      takeoverStage: 'takeoverStage',
      targetGroupName: 'targetGroupName',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      canRecover: 'boolean',
      errorMessage: 'string',
      groupName: 'string',
      observeGroupId: 'string',
      originGroupId: 'string',
      sourceReadOnly: 'boolean',
      status: 'string',
      takeoverStage: 'string',
      targetGroupName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


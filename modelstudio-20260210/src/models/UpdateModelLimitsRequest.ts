// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelLimitsRequestWorkspaceLimits extends $dara.Model {
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The throttling operation type. Valid values:
   * - **OVERLAY**: Sets or overwrites the throttling configuration.
   * - **DELETE**: Deletes the throttling configuration to restore the unlimited state.
   * 
   * @example
   * OVERLAY
   */
  operationType?: string;
  /**
   * @remarks
   * The request throttling limit.
   * 
   * @example
   * 10
   */
  requestLimit?: number;
  /**
   * @remarks
   * The time period for request throttling, in seconds.
   * 
   * @example
   * 1
   */
  requestLimitPeriod?: number;
  /**
   * @remarks
   * The usage throttling limit.
   * 
   * @example
   * 10
   */
  usageLimit?: number;
  /**
   * @remarks
   * The time period for usage throttling, in seconds.
   * 
   * @example
   * 1
   */
  usageLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      operationType: 'operationType',
      requestLimit: 'requestLimit',
      requestLimitPeriod: 'requestLimitPeriod',
      usageLimit: 'usageLimit',
      usageLimitPeriod: 'usageLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      operationType: 'string',
      requestLimit: 'number',
      requestLimitPeriod: 'number',
      usageLimit: 'number',
      usageLimitPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelLimitsRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-ac3ef438bec22dc5
   */
  workspaceId?: string;
  /**
   * @remarks
   * The throttling limits for the workspace.
   */
  workspaceLimits?: UpdateModelLimitsRequestWorkspaceLimits[];
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
      workspaceLimits: 'workspaceLimits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      workspaceLimits: { 'type': 'array', 'itemType': UpdateModelLimitsRequestWorkspaceLimits },
    };
  }

  validate() {
    if(Array.isArray(this.workspaceLimits)) {
      $dara.Model.validateArray(this.workspaceLimits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


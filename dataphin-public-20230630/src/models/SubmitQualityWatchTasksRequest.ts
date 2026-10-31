// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityWatchTasksRequestSubmitCommand extends $dara.Model {
  /**
   * @remarks
   * The business date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The custom partition expression.
   * 
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @remarks
   * The IDs of the monitored objects.
   * 
   * This parameter is required.
   */
  watchIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      partitionExpression: 'PartitionExpression',
      watchIdList: 'WatchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      partitionExpression: 'string',
      watchIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.watchIdList)) {
      $dara.Model.validateArray(this.watchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityWatchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The submit command.
   * 
   * This parameter is required.
   */
  submitCommand?: SubmitQualityWatchTasksRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      submitCommand: SubmitQualityWatchTasksRequestSubmitCommand,
    };
  }

  validate() {
    if(this.submitCommand && typeof (this.submitCommand as any).validate === 'function') {
      (this.submitCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


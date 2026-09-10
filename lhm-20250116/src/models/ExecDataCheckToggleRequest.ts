// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckToggleRequestParams extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether to enable scheduling. Valid values:
   * 
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isScheduled?: number;
  /**
   * @remarks
   * The most recent batch number.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  lastBatchId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isScheduled: 'isScheduled',
      lastBatchId: 'lastBatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isScheduled: 'number',
      lastBatchId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDataCheckToggleRequest extends $dara.Model {
  /**
   * @remarks
   * The task scheduling parameter list. Each item must contain id, lastBatchId, and isScheduled.
   * 
   * This parameter is required.
   */
  params?: ExecDataCheckToggleRequestParams[];
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': ExecDataCheckToggleRequestParams },
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


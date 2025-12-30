// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBizMetricRequestDeleteBizMetricCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Metric1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteBizMetricCommand?: DeleteBizMetricRequestDeleteBizMetricCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteBizMetricCommand: 'DeleteBizMetricCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteBizMetricCommand: DeleteBizMetricRequestDeleteBizMetricCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteBizMetricCommand && typeof (this.deleteBizMetricCommand as any).validate === 'function') {
      (this.deleteBizMetricCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


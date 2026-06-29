// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBizMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The delete request.
   * 
   * This parameter is required.
   */
  deleteBizMetricCommandShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      deleteBizMetricCommandShrink: 'DeleteBizMetricCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteBizMetricCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


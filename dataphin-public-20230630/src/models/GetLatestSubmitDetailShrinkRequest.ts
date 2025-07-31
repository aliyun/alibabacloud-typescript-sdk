// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestSubmitDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitDetailQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitDetailQueryShrink: 'SubmitDetailQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitDetailQueryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


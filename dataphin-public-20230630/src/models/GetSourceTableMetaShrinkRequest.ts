// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceTableMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contextShrink: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      queryShrink: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      queryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


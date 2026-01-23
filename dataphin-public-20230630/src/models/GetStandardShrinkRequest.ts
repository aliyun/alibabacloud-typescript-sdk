// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardShrinkRequest extends $dara.Model {
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
  standardGetQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      standardGetQueryShrink: 'StandardGetQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      standardGetQueryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


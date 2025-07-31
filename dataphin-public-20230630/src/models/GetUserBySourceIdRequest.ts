// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserBySourceIdRequest extends $dara.Model {
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
   * 
   * @example
   * 323131
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


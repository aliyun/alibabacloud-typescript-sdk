// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvRuleSaveRequestBookuserList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityType?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


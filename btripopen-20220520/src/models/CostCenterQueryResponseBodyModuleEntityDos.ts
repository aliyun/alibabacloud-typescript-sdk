// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostCenterQueryResponseBodyModuleEntityDOS extends $dara.Model {
  /**
   * @example
   * ding1234567
   */
  corpId?: string;
  /**
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @example
   * 1
   */
  entityType?: string;
  /**
   * @example
   * default_bus
   */
  name?: string;
  /**
   * @example
   * 10
   */
  userNum?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      entityId: 'entity_id',
      entityType: 'entity_type',
      name: 'name',
      userNum: 'user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      entityId: 'string',
      entityType: 'string',
      name: 'string',
      userNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


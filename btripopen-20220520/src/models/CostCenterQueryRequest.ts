// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostCenterQueryRequest extends $dara.Model {
  disable?: number;
  /**
   * @example
   * false
   */
  needOrgEntity?: boolean;
  /**
   * @example
   * cost1
   */
  thirdpartId?: string;
  title?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      needOrgEntity: 'need_org_entity',
      thirdpartId: 'thirdpart_id',
      title: 'title',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'number',
      needOrgEntity: 'boolean',
      thirdpartId: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


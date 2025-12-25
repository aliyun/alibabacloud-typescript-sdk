// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserWafRulesetsRequestQueryArgs extends $dara.Model {
  desc?: boolean;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'boolean',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWafRulesetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  queryArgs?: ListUserWafRulesetsRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgs: ListUserWafRulesetsRequestQueryArgs,
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


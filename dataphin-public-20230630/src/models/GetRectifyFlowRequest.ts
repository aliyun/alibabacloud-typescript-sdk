// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRectifyFlowRequestGetQuery extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 6500387
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page. Default value: 20.
   * 
   * @example
   * 9919509
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the rectification process.
   * 
   * This parameter is required.
   * 
   * @example
   * 442777862946
   */
  rectifyId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rectifyId: 'RectifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      rectifyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The business request parameters.
   * 
   * This parameter is required.
   */
  getQuery?: GetRectifyFlowRequestGetQuery;
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
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      getQuery: 'GetQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getQuery: GetRectifyFlowRequestGetQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.getQuery && typeof (this.getQuery as any).validate === 'function') {
      (this.getQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


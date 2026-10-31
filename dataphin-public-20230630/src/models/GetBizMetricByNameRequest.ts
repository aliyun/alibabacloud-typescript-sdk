// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizMetricByNameRequestBizMetricByNameQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the details of a draft or published asset. Valid values:
   * - True: Draft.
   * - False: Published.
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  draft?: boolean;
  /**
   * @remarks
   * The name of the business metric.
   * 
   * This parameter is required.
   * 
   * @example
   * Metric1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizMetricByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The query request.
   * 
   * This parameter is required.
   */
  bizMetricByNameQuery?: GetBizMetricByNameRequestBizMetricByNameQuery;
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizMetricByNameQuery: 'BizMetricByNameQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMetricByNameQuery: GetBizMetricByNameRequestBizMetricByNameQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.bizMetricByNameQuery && typeof (this.bizMetricByNameQuery as any).validate === 'function') {
      (this.bizMetricByNameQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


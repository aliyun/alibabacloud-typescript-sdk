// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizMetricByNameRequestBizMetricByNameQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query draft or published asset details. Set this parameter to True to query draft details, or False to query published details.
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
   * Query request.
   * 
   * This parameter is required.
   */
  bizMetricByNameQuery?: GetBizMetricByNameRequestBizMetricByNameQuery;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bizMetricByNameQuery: 'BizMetricByNameQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMetricByNameQuery: GetBizMetricByNameRequestBizMetricByNameQuery,
      opTenantId: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaUtilizationReportRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter quotas by adjustability. Valid values:
   * - true: Queries only adjustable quotas.
   * - false: Queries only non-adjustable quotas.
   * If this parameter is not specified, quotas are not filtered by adjustability.
   * 
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @remarks
   * The search keyword. Performs a fuzzy match based on the quota name or quota ID.
   * 
   * @example
   * abc
   */
  keyWords?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first query. For subsequent queries, pass the NextToken value returned in the previous response as is, and keep the quota type and filter conditions unchanged. Do not parse or construct the token.
   * 
   * @example
   * eyJvZmZzZXQiOjEwLCJvdHNOZXh0VG9rZW4iOiJDQUVTR3dvWkNoY0tFM1J2ZEdGc1gzVnpZV2RsWDNCbGNtTmxiblFRQVJnQkl1RUJDZ2tCQUFBQUFBQUFXVUFLMHdFRHpnQUFBREZUTXpFek9ETXdNemN6TnpNNE16VXpPVE0xTXpjek5qTXpNekV6TlRNNE16Z3VVek01TXpjek5UTTJOalkyTWpZeE16Y3laRFl5TmpJek16WXhNbVF6TkRNMk16RXpOREprTmpFek9UTTRNemN5WkRZMk16WTJORE16TXpVMk16TXhNemt6TURZMk16RXpNUzVUTmpFMk16YzBOamsyWmpabE56UTNNall4TmprMll5NVRNelkyTWpZMU16a3pPRE0yTmpRek1qSmtNekV6TlRNeU5qRXlaRE0wTXpFek1UWTJNbVEyTWpZME16TXpNVEprTXpNMk16WXlOalV6TkRNMU16VXpNalkwTXpVek1qTTMiLCJ0YXNrSWQiOiI5NzU2ZmJhNy1iYjNhLTQ2MTQtYTk4Ny1mNmQzNWMxOTBmMTEiLCJ1aWQiOiIxODA3Nzg1OTU3NjMxNTg4IiwidXRpbGl6YXRpb25TdGF0dXNlcyI6IiJ9
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * > For information about how to obtain the abbreviation of a cloud service, see ProductCode in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * CommonQuota, FlowControl
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The region ID of the quota, such as cn-hangzhou. If this parameter is not specified or is left empty, quotas are not filtered by region.
   * 
   * @example
   * cn-hangzhou
   */
  quotaRegionId?: string;
  /**
   * @remarks
   * The utilization statuses. You can specify multiple values. If this parameter is not specified or an empty list is passed, quotas are not filtered by utilization status.
   */
  utilizationStatuses?: string[];
  static names(): { [key: string]: string } {
    return {
      adjustable: 'Adjustable',
      keyWords: 'KeyWords',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaCategory: 'QuotaCategory',
      quotaRegionId: 'QuotaRegionId',
      utilizationStatuses: 'UtilizationStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustable: 'boolean',
      keyWords: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaCategory: 'string',
      quotaRegionId: 'string',
      utilizationStatuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.utilizationStatuses)) {
      $dara.Model.validateArray(this.utilizationStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


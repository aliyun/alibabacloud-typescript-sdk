// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaUtilizationReportRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  adjustable?: boolean;
  /**
   * @example
   * abc
   */
  keyWords?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjEwLCJvdHNOZXh0VG9rZW4iOiJDQUVTR3dvWkNoY0tFM1J2ZEdGc1gzVnpZV2RsWDNCbGNtTmxiblFRQVJnQkl1RUJDZ2tCQUFBQUFBQUFXVUFLMHdFRHpnQUFBREZUTXpFek9ETXdNemN6TnpNNE16VXpPVE0xTXpjek5qTXpNekV6TlRNNE16Z3VVek01TXpjek5UTTJOalkyTWpZeE16Y3laRFl5TmpJek16WXhNbVF6TkRNMk16RXpOREprTmpFek9UTTRNemN5WkRZMk16WTJORE16TXpVMk16TXhNemt6TURZMk16RXpNUzVUTmpFMk16YzBOamsyWmpabE56UTNNall4TmprMll5NVRNelkyTWpZMU16a3pPRE0yTmpRek1qSmtNekV6TlRNeU5qRXlaRE0wTXpFek1UWTJNbVEyTWpZME16TXpNVEprTXpNMk16WXlOalV6TkRNMU16VXpNalkwTXpVek1qTTMiLCJ0YXNrSWQiOiI5NzU2ZmJhNy1iYjNhLTQ2MTQtYTk4Ny1mNmQzNWMxOTBmMTEiLCJ1aWQiOiIxODA3Nzg1OTU3NjMxNTg4IiwidXRpbGl6YXRpb25TdGF0dXNlcyI6IiJ9
   */
  nextToken?: string;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  /**
   * @example
   * cn-hangzhou
   */
  quotaRegionId?: string;
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


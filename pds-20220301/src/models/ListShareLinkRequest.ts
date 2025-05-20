// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The creator of the share.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creator?: string;
  /**
   * @remarks
   * Specifies whether to return the shares that are canceled.
   * 
   * @example
   * true
   */
  includeCancelled?: boolean;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Default value: created_at. Valid values:
   * 
   * *   share_name: sorts the results by the name of the share.
   * *   updated_at: sorts the results by the time when the share was modified.
   * *   description: sorts the results by the description of the share.
   * *   created_at: sorts the results by the time when the share was created.
   * 
   * @example
   * share_name
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned results. By default, order_direction is set to DESC if order_by is set to created_at or updated_at, and is set to ASC if order_by is set to other values. Valid values:
   * 
   * *   ASC: sorts the results in ascending order.
   * *   DESC: sorts the results in descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      includeCancelled: 'include_cancelled',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      includeCancelled: 'boolean',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


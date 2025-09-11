// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The container specifications.
   */
  AICSpecsShrink?: string;
  /**
   * @remarks
   * Spcifies whether the result contains the container information. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  describeAICInstances?: boolean;
  /**
   * @remarks
   * The IDs of the Edge Node Service (ENS) nodes.
   */
  ensRegionIdsShrink?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2006-01-03
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2006-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * Server-Name
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The sorting order of the results to return. Valid values: ServerIdSort, ServerNameSort, ExpireTimeSort, CreationTimeSort, and EnsRegionIdSort.
   * 
   * asc: ascending order. desc: descending order.
   * 
   * @example
   * {"ServerIdSort":"desc","ServerNameSort":"desc","ExpireTimeSort":"asc","CreationTimeSort":"asc","EnsRegionIdSort":"asc"}
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the ARM servers.
   */
  serverIdsShrink?: string;
  /**
   * @remarks
   * The server specifications.
   */
  serverSpecsShrink?: string;
  /**
   * @remarks
   * The operation statuses.
   */
  statesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      AICSpecsShrink: 'AICSpecs',
      describeAICInstances: 'DescribeAICInstances',
      ensRegionIdsShrink: 'EnsRegionIds',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      name: 'Name',
      namespace: 'Namespace',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serverIdsShrink: 'ServerIds',
      serverSpecsShrink: 'ServerSpecs',
      statesShrink: 'States',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AICSpecsShrink: 'string',
      describeAICInstances: 'boolean',
      ensRegionIdsShrink: 'string',
      maxDate: 'string',
      minDate: 'string',
      name: 'string',
      namespace: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serverIdsShrink: 'string',
      serverSpecsShrink: 'string',
      statesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


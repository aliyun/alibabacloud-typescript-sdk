// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of container specifications.
   */
  AICSpecsShrink?: string;
  /**
   * @remarks
   * Specifies whether the query results include container information. Valid values:
   * 
   * - **true**: Included.
   * 
   * - **false**: Not included.
   * 
   * @example
   * true
   */
  describeAICInstances?: boolean;
  /**
   * @remarks
   * The list of ENS edge zone IDs.
   */
  ensRegionIdsShrink?: string;
  /**
   * @remarks
   * The end time of the query. Format: "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2006-01-03
   */
  maxDate?: string;
  /**
   * @remarks
   * The start time of the query. Format: "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2006-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The server name.
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
   * The sorting method for query results. You can sort results by one or more of the following fields: ServerIdSort (server ID), ServerNameSort (server name), ExpireTimeSort (expiration time), CreationTimeSort (creation time), and EnsRegionIdSort (edge zone ID).
   * 
   * Valid values: asc (ascending order) and desc (descending order).
   * 
   * @example
   * {"ServerIdSort":"desc","ServerNameSort":"desc","ExpireTimeSort":"asc"}
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number of the query list. Minimum value: **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of server instance IDs.
   */
  serverIdsShrink?: string;
  /**
   * @remarks
   * The list of server specifications.
   */
  serverSpecsShrink?: string;
  /**
   * @remarks
   * The list of operation states.
   */
  statesShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
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


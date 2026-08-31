// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentRunsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by exact dataset ID.
   * 
   * @example
   * arms_customer_agent_level1
   */
  datasetId?: string;
  /**
   * @remarks
   * Filters results by fuzzy match on the experiment configuration name.
   * 
   * @example
   * experimentA
   */
  experimentName?: string;
  /**
   * @remarks
   * Optional. Use `page` and `pageSize` for pagination instead.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional. Use `page` and `pageSize` for pagination instead.
   * 
   * @example
   * eyJwYWdlIjoxfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number, starting from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters results by fuzzy match on the experiment plan name.
   * 
   * @example
   * arms_agent_experiment
   */
  planName?: string;
  /**
   * @remarks
   * Filters results by status.
   * 
   * @example
   * evaluating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      experimentName: 'experimentName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      planName: 'planName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      experimentName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      planName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


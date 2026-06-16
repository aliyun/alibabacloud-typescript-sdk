// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the start of the next page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root
   */
  queueName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * emr-spark-demo-job
   */
  sessionClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'kind',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queueName: 'queueName',
      regionId: 'regionId',
      sessionClusterId: 'sessionClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queueName: 'string',
      regionId: 'string',
      sessionClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


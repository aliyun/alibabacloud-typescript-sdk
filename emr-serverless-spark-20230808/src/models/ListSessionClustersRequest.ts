// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   NOTEBOOK
   * *   THRIFT
   * *   SQL
   * 
   * @example
   * SQL
   */
  kind?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the queue.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAITasksRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of data entries to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * U12WEI6Ro2ol3wA54rBNS3Cltv2VJyA+7hP4GqbIOhmWU5mWU9ZE3cXLgDaH4KSMRfIYcIVrvtHaAzCoyfo7VQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the AI task. You can filter AI tasks by task ID.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the AI task. You can filter AI tasks by task type.
   * 
   * *   GenerateTemplate: The AI task is used to generate a template.
   * *   FixTemplate: The AI task is used to fix a template.
   * 
   * If you leave this parameter empty, all task types are queried.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


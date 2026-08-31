// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterGetBillingBillSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The API Key ID used to filter results. This parameter is optional and linked with the department. You must specify clientId first.
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID used to filter results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The list of department IDs, separated by commas. Supports querying data for multiple departments. This parameter is mutually exclusive with clientId.
   * 
   * @example
   * 1,2,3
   */
  clientIds?: string;
  /**
   * @remarks
   * The end time, in UNIX timestamp (seconds).
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The member IDs used to filter results, separated by commas. This parameter is optional. If not specified, the department and all its members are included. If an empty value is specified, only the department is included without members.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * The model ID. This parameter is optional and used to filter by model.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The model types, separated by commas.
   * 
   * @example
   * Chat,ChatMultimodal
   */
  modelTypes?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time, in UNIX timestamp (seconds).
   * 
   * This parameter is required.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      clientIds: 'clientIds',
      endTime: 'endTime',
      maxResults: 'maxResults',
      memberUserIds: 'memberUserIds',
      modelId: 'modelId',
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientIds: 'string',
      endTime: 'number',
      maxResults: 'number',
      memberUserIds: 'string',
      modelId: 'number',
      modelTypes: 'string',
      nextToken: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


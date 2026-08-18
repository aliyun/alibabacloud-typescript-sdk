// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryObservationChartsRequest extends $dara.Model {
  /**
   * @remarks
   * The API key ID used to filter results.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The client ID used to filter results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The list of department IDs, separated by commas. Supports querying data for multiple departments. This parameter is mutually exclusive with client_id.
   * 
   * @example
   * 1,2,3
   */
  clientIds?: string;
  /**
   * @remarks
   * The custom end time.
   * 
   * @example
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Optional. Filters by member IDs, separated by commas. If not specified, the department and all its members are included. If an empty value is specified, only the department is included without members.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * The model ID used to filter results.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The custom start time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time range for the query. Valid values: 1h, 6h, 24h, 7d, and 30d.
   * 
   * @example
   * 24h
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      clientIds: 'clientIds',
      endTime: 'endTime',
      memberUserIds: 'memberUserIds',
      modelId: 'modelId',
      startTime: 'startTime',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientIds: 'string',
      endTime: 'string',
      memberUserIds: 'string',
      modelId: 'number',
      startTime: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


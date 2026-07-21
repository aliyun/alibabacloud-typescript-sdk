// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryObservationChartsRequest extends $dara.Model {
  /**
   * @remarks
   * The API key ID to use as a filter.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The client ID to use as a filter.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The end time of the custom time range, in ISO 8601 UTC format. If specified, `startTime` must also be provided.
   * 
   * @example
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The model ID to use as a filter.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The start time of the custom time range, in ISO 8601 UTC format. If specified, `endTime` must also be provided.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time range for the query. Valid values are `1h`, `6h`, `24h`, `7d`, and `30d`. This parameter is mutually exclusive with `startTime` and `endTime`.
   * 
   * @example
   * 24h
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      endTime: 'endTime',
      modelId: 'modelId',
      startTime: 'startTime',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      endTime: 'string',
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


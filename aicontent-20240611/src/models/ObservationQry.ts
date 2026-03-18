// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObservationQry extends $dara.Model {
  /**
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
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


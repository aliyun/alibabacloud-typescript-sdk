// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObservationLogListQry extends $dara.Model {
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
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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
      page: 'page',
      pageSize: 'pageSize',
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
      page: 'number',
      pageSize: 'number',
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


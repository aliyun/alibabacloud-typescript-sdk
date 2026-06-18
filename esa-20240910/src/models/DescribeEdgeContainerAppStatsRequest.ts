// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Basic information about the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app-xxxx
   */
  app?: string;
  /**
   * @remarks
   * The end time to retrieve data. The date must be in ISO 8601 format and use UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2024-09-02T16:04:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric fields.
   * 
   * This parameter is required.
   * 
   * @example
   * pod_ready_rate
   */
  fields?: string;
  /**
   * @remarks
   * The Internet Service Provider (ISP).
   * 
   * @example
   * telecom,unicom,mobile
   */
  isp?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * huizhou
   */
  locate?: string;
  /**
   * @remarks
   * The start time. The date must be in ISO 8601 format and use UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2024-09-02T15:04:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tenant.
   * 
   * @example
   * t-xxxx
   */
  tenant?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      endTime: 'EndTime',
      fields: 'Fields',
      isp: 'Isp',
      locate: 'Locate',
      startTime: 'StartTime',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      endTime: 'string',
      fields: 'string',
      isp: 'string',
      locate: 'string',
      startTime: 'string',
      tenant: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


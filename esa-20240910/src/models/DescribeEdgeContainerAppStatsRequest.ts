// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-xxxx
   */
  app?: string;
  /**
   * @example
   * 2024-09-02T16:04:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pod_ready_rate
   */
  fields?: string;
  /**
   * @example
   * telecom,unicom,cmcc
   */
  isp?: string;
  /**
   * @example
   * huizhou
   */
  locate?: string;
  /**
   * @example
   * 2024-09-02T15:04:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tenant ID.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeContainerAppStatsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  app?: string;
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: string;
  isp?: string;
  locate?: string;
  startTime?: string;
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


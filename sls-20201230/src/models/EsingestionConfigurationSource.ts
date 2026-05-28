// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ESIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bootstrapServers?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectorMode?: string;
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  index?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxDataDelaySec?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minFragRangeSec?: number;
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  startTime?: number;
  timeFieldName?: string;
  timeFormat?: string;
  timeZone?: string;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstrapServers: 'BootstrapServers',
      connectorMode: 'ConnectorMode',
      endTime: 'EndTime',
      index: 'Index',
      maxDataDelaySec: 'MaxDataDelaySec',
      minFragRangeSec: 'MinFragRangeSec',
      password: 'Password',
      query: 'Query',
      startTime: 'StartTime',
      timeFieldName: 'TimeFieldName',
      timeFormat: 'TimeFormat',
      timeZone: 'TimeZone',
      username: 'Username',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapServers: 'string',
      connectorMode: 'string',
      endTime: 'number',
      index: 'string',
      maxDataDelaySec: 'number',
      minFragRangeSec: 'number',
      password: 'string',
      query: 'string',
      startTime: 'number',
      timeFieldName: 'string',
      timeFormat: 'string',
      timeZone: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


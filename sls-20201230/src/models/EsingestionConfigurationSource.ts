// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ESIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * The URL of the service instance.
   * 
   * This parameter is required.
   */
  bootstrapServers?: string;
  /**
   * @remarks
   * The import mode.
   * 
   * This parameter is required.
   */
  connectorMode?: string;
  /**
   * @remarks
   * The end time.
   */
  endTime?: number;
  /**
   * @remarks
   * The list of ES indexes.
   * 
   * This parameter is required.
   */
  index?: string;
  /**
   * @remarks
   * The maximum data delay in seconds.
   * 
   * This parameter is required.
   */
  maxDataDelaySec?: number;
  /**
   * @remarks
   * The interval in seconds for checking new data.
   * 
   * This parameter is required.
   */
  minFragRangeSec?: number;
  /**
   * @remarks
   * The password for the ES user.
   */
  password?: string;
  /**
   * @remarks
   * The ES query.
   * 
   * This parameter is required.
   */
  query?: string;
  /**
   * @remarks
   * The start time.
   */
  startTime?: number;
  /**
   * @remarks
   * The time field.
   */
  timeFieldName?: string;
  /**
   * @remarks
   * The format of the time field.
   */
  timeFormat?: string;
  /**
   * @remarks
   * The time zone of the time field.
   */
  timeZone?: string;
  /**
   * @remarks
   * The username for ES.
   */
  username?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   */
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


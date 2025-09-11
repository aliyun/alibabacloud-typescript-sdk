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
  index?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  minFragRangeSec?: number;
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
  maxDataDelaySec?: number;
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
      index: 'Index',
      minFragRangeSec: 'MinFragRangeSec',
      connectorMode: 'connectorMode',
      endTime: 'endTime',
      maxDataDelaySec: 'maxDataDelaySec',
      password: 'password',
      query: 'query',
      startTime: 'startTime',
      timeFieldName: 'timeFieldName',
      timeFormat: 'timeFormat',
      timeZone: 'timeZone',
      username: 'username',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapServers: 'string',
      index: 'string',
      minFragRangeSec: 'number',
      connectorMode: 'string',
      endTime: 'number',
      maxDataDelaySec: 'number',
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


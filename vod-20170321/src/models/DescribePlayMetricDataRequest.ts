// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayMetricDataRequest extends $dara.Model {
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  beginTs?: string;
  definition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTs?: string;
  experienceLevel?: string;
  itemConfigs?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricType?: string;
  network?: string;
  os?: string;
  sdkVersion?: string;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      experienceLevel: 'ExperienceLevel',
      itemConfigs: 'ItemConfigs',
      metricType: 'MetricType',
      network: 'Network',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'string',
      definition: 'string',
      endTs: 'string',
      experienceLevel: 'string',
      itemConfigs: 'string',
      metricType: 'string',
      network: 'string',
      os: 'string',
      sdkVersion: 'string',
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


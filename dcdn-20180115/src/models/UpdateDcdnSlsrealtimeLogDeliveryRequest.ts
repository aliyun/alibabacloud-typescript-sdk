// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDcdnSLSRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The region from which logs are collected.
   * 
   * *   **cn**: Chinese mainland
   * *   **sg**: Singapore
   * *   **in**: India
   * *   **eu**: Europe
   * *   **us**: United States
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The domain names from which logs were collected. You can specify one or more domain names. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * example-cn
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * This parameter is required.
   * 
   * @example
   * example-cn
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region to which logs were delivered.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  SLSRegion?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 1.0
   */
  samplingRate?: string;
  static names(): { [key: string]: string } {
    return {
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCenter: 'string',
      domainName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


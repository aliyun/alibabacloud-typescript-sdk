// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnSLSRealTimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collected logs. Default value: cdn_log_access_l1. Valid values:
   * 
   * *   **cdn_log_access_l1**: access logs of Dynamic Content Delivery Network (DCDN) points of presence (POPs)
   * *   **cdn_log_origin**: back-to-origin logs
   * *   **cdn_log_er**: EdgeRoutine logs
   * 
   * @example
   * cdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn: China
   * *   sg: Singapore
   * *   eu: Europe
   * *   us: United States
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
   * The name of a real-time log delivery project.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Log Service Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyundoc
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region to which real-time logs are delivered.
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
      businessType: 'BusinessType',
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
      businessType: 'string',
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


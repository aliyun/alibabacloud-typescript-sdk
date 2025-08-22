// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
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
   * The region from which logs were collected.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The domain names from which logs were collected. You can specify one or more domain names. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the field. For more information about fields in real-time log entries, see [Fields in a real-time log](https://help.aliyun.com/document_detail/324199.html).
   * 
   * @example
   * field1,field2
   */
  fieldName?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * example
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * example-cn
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The name of the log file.
   * 
   * @example
   * example-cn
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region to which logs were delivered.
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
  /**
   * @remarks
   * The status of real-time logs.
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The type of log delivery. Only **SLS_POST** is supported.
   * 
   * @example
   * SLS_POST
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      domainName: 'DomainName',
      fieldName: 'FieldName',
      projectName: 'ProjectName',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      samplingRate: 'SamplingRate',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      domainName: 'string',
      fieldName: 'string',
      projectName: 'string',
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      samplingRate: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration results of the domain name.
   */
  content?: DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDcdnSLSRealtimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


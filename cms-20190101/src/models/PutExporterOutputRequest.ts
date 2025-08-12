// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration set for exporting monitoring data. It is a JSON object string. The string must include the following fields:
   * 
   * *   endpoint: the endpoint of Log Service.
   * *   project: the Log Service project to which monitoring data is exported.
   * *   logstore: the Log Service Logstore to which the monitoring data is exported.
   * *   ak: the AccessKey ID.
   * *   as: the AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * { "endpoint": "http://cn-qingdao-share.log.aliyuncs.com", "project": "exporter", "logstore": "exporter","ak": "LTAIp*******", "userId": "17754********", "as": "TxHwuJ8yAb3AU******"}
   */
  configJson?: string;
  /**
   * @remarks
   * The description of the configuration set.
   * 
   * @example
   * Export CPU metrics
   */
  desc?: string;
  /**
   * @remarks
   * The name of the configuration set.
   * 
   * This parameter is required.
   * 
   * @example
   * exporterConfig
   */
  destName?: string;
  /**
   * @remarks
   * The service to which the monitoring data is exported.
   * 
   * @example
   * sls
   */
  destType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      desc: 'Desc',
      destName: 'DestName',
      destType: 'DestType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: 'string',
      desc: 'string',
      destName: 'string',
      destType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the data export. The value is a JSONObject string that must contain the following fields:
   * 
   * - endpoint: the domain name that corresponds to the data of Log Service (SLS).
   * - project: the project.
   * - logstore: the Logstore.
   * - ak: the AccessKey ID.
   * - as: the AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * { "endpoint": "http://cn-qingdao-share.log.aliyuncs.com", "project": "exporter", "logstore": "exporter","ak": "LTAIp*******", "userId": "17754********", "as": "TxHwuJ8yAb3AU******"}
   */
  configJson?: string;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * CPU metric export
   */
  desc?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * exporterConfig
   */
  destName?: string;
  /**
   * @remarks
   * The product to which the data is exported.
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


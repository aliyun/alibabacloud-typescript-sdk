// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaxComputeExportConfigurationSink extends $dara.Model {
  /**
   * @example
   * 1800
   */
  bufferInterval?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: string[];
  /**
   * @example
   * true
   */
  filterInvalid?: boolean;
  /**
   * @example
   * asdfghjk
   * 
   * @deprecated
   */
  odpsAccessKeyId?: string;
  /**
   * @example
   * esasdfghjkl
   * 
   * @deprecated
   */
  odpsAccessSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  odpsEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_project
   */
  odpsProject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  odpsRolearn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_table
   */
  odpsTable?: string;
  /**
   * @example
   * http://dt.cn-hangzhou.maxcompute.aliyun-inc.com
   */
  odpsTunnelEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  partitionColumn?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * %Y_%m_%d
   */
  partitionTimeFormat?: string;
  /**
   * @example
   * StrfTimeFormat
   */
  timeFormatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * +0800
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      bufferInterval: 'bufferInterval',
      fields: 'fields',
      filterInvalid: 'filterInvalid',
      odpsAccessKeyId: 'odpsAccessKeyId',
      odpsAccessSecret: 'odpsAccessSecret',
      odpsEndpoint: 'odpsEndpoint',
      odpsProject: 'odpsProject',
      odpsRolearn: 'odpsRolearn',
      odpsTable: 'odpsTable',
      odpsTunnelEndpoint: 'odpsTunnelEndpoint',
      partitionColumn: 'partitionColumn',
      partitionTimeFormat: 'partitionTimeFormat',
      timeFormatType: 'timeFormatType',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferInterval: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      filterInvalid: 'boolean',
      odpsAccessKeyId: 'string',
      odpsAccessSecret: 'string',
      odpsEndpoint: 'string',
      odpsProject: 'string',
      odpsRolearn: 'string',
      odpsTable: 'string',
      odpsTunnelEndpoint: 'string',
      partitionColumn: { 'type': 'array', 'itemType': 'string' },
      partitionTimeFormat: 'string',
      timeFormatType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.partitionColumn)) {
      $dara.Model.validateArray(this.partitionColumn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


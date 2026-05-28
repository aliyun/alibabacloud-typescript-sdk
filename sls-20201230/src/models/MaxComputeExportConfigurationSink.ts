// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaxComputeExportConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * Specifies the minimum time granularity between two data shipping jobs. Unit: seconds. Valid values:
   * 
   * *   1800 (default)
   * *   3600
   * 
   * @example
   * 1800
   */
  bufferInterval?: string;
  /**
   * @remarks
   * The fields that you want to ship.
   * 
   * This parameter is required.
   */
  fields?: string[];
  /**
   * @remarks
   * Specifies whether to filter the invalid content.
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  filterInvalid?: boolean;
  /**
   * @remarks
   * The AccessKey ID used to write data to MaxCompute.
   * 
   * @example
   * axxxxxxxxxxxb
   * 
   * @deprecated
   */
  odpsAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret used to write data to MaxCompute.
   * 
   * @example
   * aaxxxxxxxxxxxxxxxxxxxxxbb
   * 
   * @deprecated
   */
  odpsAccessSecret?: string;
  /**
   * @remarks
   * The endpoint of MaxCompute.
   * 
   * *   ⚠️Note: The endpoint of MaxCompute must be the same as that of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * https://service.cn-hangzhou-intranet.maxcompute.aliyun-inc.com/api
   */
  odpsEndpoint?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_project
   */
  odpsProject?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role the data shipping job assumes to write data to MaxCompute.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::xxxxxxx
   */
  odpsRolearn?: string;
  /**
   * @remarks
   * The name of the MaxCompute table.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_table
   */
  odpsTable?: string;
  /**
   * @remarks
   * The Tunnel endpoint of MaxCompute.
   * 
   * *   ⚠️Note: The Tunnel endpoint of MaxCompute must be the same as that of the Simple Log Service project.
   * 
   * @example
   * https://dt.cn-hangzhou-intranet.maxcompute.aliyun-inc.com
   */
  odpsTunnelEndpoint?: string;
  /**
   * @remarks
   * The partition key columns that you want to ship.
   * 
   * This parameter is required.
   */
  partitionColumn?: string[];
  /**
   * @remarks
   * The time partition format.
   * 
   * This parameter is required.
   * 
   * @example
   * %Y_%m_%d
   */
  partitionTimeFormat?: string;
  /**
   * @remarks
   * The time partition type. Valid values:
   * 
   * *   StrfTimeFormat (default)
   * *   JavaSimpleDateFormat
   * 
   * @example
   * StrfTimeFormat
   */
  timeFormatType?: string;
  /**
   * @remarks
   * The time zone.
   * 
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


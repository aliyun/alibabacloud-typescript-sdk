// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTableRequestDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * AK
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * AS
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * antsys-shujiang-osstest
   */
  bucket?: string;
  catalog?: string;
  database?: string;
  /**
   * @remarks
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The path of the Object Storage Service (OSS) object.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table.
   * 
   * @example
   * ds=20231220
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * yw_dw_rpt
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * behavior
   */
  table?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      ossPath: 'ossPath',
      partition: 'partition',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      ossPath: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


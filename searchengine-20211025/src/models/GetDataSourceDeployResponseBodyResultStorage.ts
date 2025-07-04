// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultStorage extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the MaxCompute data source.
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * The AccessKey secret of the MaxCompute data source.
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * antsys-miniapp-chongwen-static
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
   * @example
   * lazada-campaign-flink
   */
  namespace?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) path.
   * 
   * @example
   * oss://opensearch
   */
  ossPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. Example: ds=20180102.
   * 
   * @example
   * ds=20220926
   */
  partition?: string;
  /**
   * @example
   * /beiming_xobject/dwd_xobjectsandbox__list_create_action_by_new/
   */
  path?: string;
  /**
   * @example
   * wireless_1688_personal_rec
   */
  project?: string;
  /**
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
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
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
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
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


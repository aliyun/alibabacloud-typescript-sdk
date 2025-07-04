// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasRequest extends $dara.Model {
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
   * The endpoint of the MaxCompute data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * igraph-cn-tl32wnrhi04
   */
  namespace?: string;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * dt=20230520
   */
  partition?: string;
  /**
   * @remarks
   * The name of the MaxCompute project that is used as the data source.
   * 
   * @example
   * start-flask-v3-obcc
   */
  project?: string;
  /**
   * @remarks
   * The name of the MaxCompute table that is used as the data source.
   * 
   * @example
   * item
   */
  table?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      endpoint: 'endpoint',
      namespace: 'namespace',
      partition: 'partition',
      project: 'project',
      table: 'table',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      endpoint: 'string',
      namespace: 'string',
      partition: 'string',
      project: 'string',
      table: 'string',
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


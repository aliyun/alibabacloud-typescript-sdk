// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the ODPS data source.
   * 
   * @example
   * L***p
   */
  accessKey?: string;
  /**
   * @remarks
   * The alias of an ODPS data source.
   * 
   * @example
   * 5**9a6
   */
  accessSecret?: string;
  /**
   * @remarks
   * The endpoint of the ODPS data source.
   * 
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The namespace of the Saro data source.
   * 
   * @example
   * imm
   */
  namespace?: string;
  /**
   * @remarks
   * The data partition.
   * 
   * @example
   * dt=20230520
   */
  partition?: string;
  /**
   * @remarks
   * The name of the ODPS data source project.
   * 
   * @example
   * sec_odps
   */
  project?: string;
  /**
   * @remarks
   * The name of the table in the Saro or ODPS data source.
   * 
   * @example
   * item
   */
  table?: string;
  /**
   * @remarks
   * odps, swift, saro, oss, unknown
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


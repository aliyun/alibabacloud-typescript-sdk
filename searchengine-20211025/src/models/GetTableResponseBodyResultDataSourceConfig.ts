// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableResponseBodyResultDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * AK
   * 
   * @example
   * ak
   */
  accessKey?: string;
  /**
   * @remarks
   * AS
   * 
   * @example
   * as
   */
  accessSecret?: string;
  /**
   * @example
   * heytea-ops-oss
   */
  bucket?: string;
  /**
   * @example
   * http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api
   */
  endpoint?: string;
  /**
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @example
   * /opensearch_index_data/sift_oss_test.data
   */
  ossPath?: string;
  /**
   * @example
   * ds=20220808
   */
  partition?: string;
  /**
   * @example
   * vendor/sebastian/comparator/src/exceptions
   */
  path?: string;
  /**
   * @example
   * dp_pdm_marketing_prod
   */
  project?: string;
  /**
   * @example
   * test_add
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      bucket: 'bucket',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      bucket: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisItemsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 诊断集群写数据是否有堆积当集群的数据写入存在堆积时，会造成BulkReject异常，可能会导致数据丢失，且会造成系统资源消耗严重
   */
  description?: string;
  /**
   * @example
   * ClusterBulkRejectDiagnostic
   */
  key?: string;
  /**
   * @example
   * 索引写入BulkReject诊断
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


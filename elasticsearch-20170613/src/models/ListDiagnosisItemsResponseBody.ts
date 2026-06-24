// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisItemsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The diagnostic item description.
   * 
   * @example
   * 诊断集群写数据是否有堆积当集群的数据写入存在堆积时，会造成BulkReject异常，可能会导致数据丢失，且会造成系统资源消耗严重
   */
  description?: string;
  esApiRequired?: boolean;
  /**
   * @remarks
   * The diagnostic item identifier.
   * 
   * @example
   * ClusterBulkRejectDiagnostic
   */
  key?: string;
  /**
   * @remarks
   * The diagnostic item name.
   * 
   * @example
   * 索引写入BulkReject诊断
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      esApiRequired: 'esApiRequired',
      key: 'key',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      esApiRequired: 'boolean',
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

export class ListDiagnosisItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListDiagnosisItemsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDiagnosisItemsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


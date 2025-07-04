// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterRunTimeInfoResponseBodyResultDataNodes } from "./GetClusterRunTimeInfoResponseBodyResultDataNodes";
import { GetClusterRunTimeInfoResponseBodyResultQueryNode } from "./GetClusterRunTimeInfoResponseBodyResultQueryNode";


export class GetClusterRunTimeInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vpc_hz_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * The information about the Searcher workers.
   */
  dataNodes?: GetClusterRunTimeInfoResponseBodyResultDataNodes[];
  /**
   * @remarks
   * The information about the Query Result Searcher (QRS) workers.
   */
  queryNode?: GetClusterRunTimeInfoResponseBodyResultQueryNode;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      dataNodes: 'dataNodes',
      queryNode: 'queryNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      dataNodes: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodes },
      queryNode: GetClusterRunTimeInfoResponseBodyResultQueryNode,
    };
  }

  validate() {
    if(Array.isArray(this.dataNodes)) {
      $dara.Model.validateArray(this.dataNodes);
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Edge } from "./Edge";
import { JobInfo } from "./JobInfo";
import { Node } from "./Node";


export class LineageInfo extends $dara.Model {
  edges?: Edge;
  jobInfos?: JobInfo[];
  nodes?: Node[];
  static names(): { [key: string]: string } {
    return {
      edges: 'edges',
      jobInfos: 'jobInfos',
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: Edge,
      jobInfos: { 'type': 'array', 'itemType': JobInfo },
      nodes: { 'type': 'array', 'itemType': Node },
    };
  }

  validate() {
    if(this.edges && typeof (this.edges as any).validate === 'function') {
      (this.edges as any).validate();
    }
    if(Array.isArray(this.jobInfos)) {
      $dara.Model.validateArray(this.jobInfos);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


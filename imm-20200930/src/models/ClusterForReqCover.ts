// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterForReqCoverFigures } from "./ClusterForReqCoverFigures";


export class ClusterForReqCover extends $dara.Model {
  figures?: ClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': ClusterForReqCoverFigures },
    };
  }

  validate() {
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


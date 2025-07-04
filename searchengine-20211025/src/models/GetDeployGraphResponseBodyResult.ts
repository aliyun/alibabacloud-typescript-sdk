// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeployGraphResponseBodyResultGraph } from "./GetDeployGraphResponseBodyResultGraph";


export class GetDeployGraphResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The deployment information.
   */
  graph?: GetDeployGraphResponseBodyResultGraph;
  static names(): { [key: string]: string } {
    return {
      graph: 'graph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graph: GetDeployGraphResponseBodyResultGraph,
    };
  }

  validate() {
    if(this.graph && typeof (this.graph as any).validate === 'function') {
      (this.graph as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FigureCluster } from "./FigureCluster";


export class GetFigureClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the face cluster.
   */
  figureCluster?: FigureCluster;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F74C5C9-5AC0-49F9-914D-E01589D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      figureCluster: 'FigureCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureCluster: FigureCluster,
      requestId: 'string',
    };
  }

  validate() {
    if(this.figureCluster && typeof (this.figureCluster as any).validate === 'function') {
      (this.figureCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


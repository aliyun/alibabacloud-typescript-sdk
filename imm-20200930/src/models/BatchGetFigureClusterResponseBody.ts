// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FigureCluster } from "./FigureCluster";


export class BatchGetFigureClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  figureClusters?: FigureCluster[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusters: 'FigureClusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusters: { 'type': 'array', 'itemType': FigureCluster },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.figureClusters)) {
      $dara.Model.validateArray(this.figureClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


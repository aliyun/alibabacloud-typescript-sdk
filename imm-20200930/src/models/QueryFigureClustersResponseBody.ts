// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FigureCluster } from "./FigureCluster";


export class QueryFigureClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The face groups.
   */
  figureClusters?: FigureCluster[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFF****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of face groups that matches the current query conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      figureClusters: 'FigureClusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusters: { 'type': 'array', 'itemType': FigureCluster },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
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


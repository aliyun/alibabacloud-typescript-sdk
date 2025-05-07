// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotViewPointsResponseBodyDataViewPointsOutlines } from "./ListHotViewPointsResponseBodyDataViewPointsOutlines";


export class ListHotViewPointsResponseBodyDataViewPoints extends $dara.Model {
  outlines?: ListHotViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


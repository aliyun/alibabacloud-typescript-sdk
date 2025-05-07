// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTimedViewAttitudeResponseBodyDataViewPointsOutlines } from "./ListTimedViewAttitudeResponseBodyDataViewPointsOutlines";


export class ListTimedViewAttitudeResponseBodyDataViewPoints extends $dara.Model {
  outlines?: ListTimedViewAttitudeResponseBodyDataViewPointsOutlines[];
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
      outlines: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPointsOutlines },
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


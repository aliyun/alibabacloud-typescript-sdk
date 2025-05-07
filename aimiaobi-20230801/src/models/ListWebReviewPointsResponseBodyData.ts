// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWebReviewPointsResponseBodyDataComments } from "./ListWebReviewPointsResponseBodyDataComments";
import { ListWebReviewPointsResponseBodyDataViewPoints } from "./ListWebReviewPointsResponseBodyDataViewPoints";


export class ListWebReviewPointsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  comments?: ListWebReviewPointsResponseBodyDataComments[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: ListWebReviewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      comments: 'Comments',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      comments: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataComments },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


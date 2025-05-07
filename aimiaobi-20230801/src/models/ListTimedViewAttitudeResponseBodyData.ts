// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTimedViewAttitudeResponseBodyDataViewPoints } from "./ListTimedViewAttitudeResponseBodyDataViewPoints";


export class ListTimedViewAttitudeResponseBodyData extends $dara.Model {
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
  /**
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  viewPoints?: ListTimedViewAttitudeResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      pubTime: 'PubTime',
      ratio: 'Ratio',
      source: 'Source',
      title: 'Title',
      url: 'Url',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      pubTime: 'string',
      ratio: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


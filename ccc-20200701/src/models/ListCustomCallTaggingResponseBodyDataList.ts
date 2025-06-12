// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomCallTaggingResponseBodyDataListCallTagList } from "./ListCustomCallTaggingResponseBodyDataListCallTagList";


export class ListCustomCallTaggingResponseBodyDataList extends $dara.Model {
  callTagList?: ListCustomCallTaggingResponseBodyDataListCallTagList[];
  /**
   * @example
   * agent
   */
  creator?: string;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1312121****
   */
  number?: string;
  /**
   * @example
   * 2020-07-05 00:00:00.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callTagList: 'CallTagList',
      creator: 'Creator',
      description: 'Description',
      instanceId: 'InstanceId',
      number: 'Number',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTagList: { 'type': 'array', 'itemType': ListCustomCallTaggingResponseBodyDataListCallTagList },
      creator: 'string',
      description: 'string',
      instanceId: 'string',
      number: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callTagList)) {
      $dara.Model.validateArray(this.callTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


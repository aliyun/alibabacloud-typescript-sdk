// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocClusterTaskResponseBodyDataTopics } from "./GetDocClusterTaskResponseBodyDataTopics";


export class GetDocClusterTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
  topics?: GetDocClusterTaskResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      topics: { 'type': 'array', 'itemType': GetDocClusterTaskResponseBodyDataTopics },
    };
  }

  validate() {
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


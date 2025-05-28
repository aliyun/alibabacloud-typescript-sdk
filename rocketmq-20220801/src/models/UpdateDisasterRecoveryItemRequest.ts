// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDisasterRecoveryItemRequestTopics } from "./UpdateDisasterRecoveryItemRequestTopics";


export class UpdateDisasterRecoveryItemRequest extends $dara.Model {
  /**
   * @remarks
   * The topics involved in the topic mapping.
   */
  topics?: UpdateDisasterRecoveryItemRequestTopics[];
  static names(): { [key: string]: string } {
    return {
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topics: { 'type': 'array', 'itemType': UpdateDisasterRecoveryItemRequestTopics },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDisasterRecoveryItemRequestTopics } from "./AddDisasterRecoveryItemRequestTopics";


export class AddDisasterRecoveryItemRequest extends $dara.Model {
  /**
   * @remarks
   * Topics included in the backup mapping. Required.
   */
  topics?: AddDisasterRecoveryItemRequestTopics[];
  static names(): { [key: string]: string } {
    return {
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topics: { 'type': 'array', 'itemType': AddDisasterRecoveryItemRequestTopics },
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


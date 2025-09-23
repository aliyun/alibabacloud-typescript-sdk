// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectObjectElement } from "./DetectObjectElement";


export class DetectObjectFrame extends $dara.Model {
  elements?: DetectObjectElement[];
  time?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectObjectElement },
      time: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


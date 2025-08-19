// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingConfigStatus } from "./ScalingConfigStatus";


export class ListScalingConfigStatusOutput extends $dara.Model {
  nextToken?: string;
  result?: ScalingConfigStatus[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ScalingConfigStatus },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


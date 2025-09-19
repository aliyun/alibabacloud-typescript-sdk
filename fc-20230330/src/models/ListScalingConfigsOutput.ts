// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingConfigStatus } from "./ScalingConfigStatus";


export class ListScalingConfigsOutput extends $dara.Model {
  nextToken?: string;
  scalingConfigs?: ScalingConfigStatus[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      scalingConfigs: 'scalingConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      scalingConfigs: { 'type': 'array', 'itemType': ScalingConfigStatus },
    };
  }

  validate() {
    if(Array.isArray(this.scalingConfigs)) {
      $dara.Model.validateArray(this.scalingConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


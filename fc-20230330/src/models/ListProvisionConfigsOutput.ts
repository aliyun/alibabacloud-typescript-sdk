// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProvisionConfig } from "./ProvisionConfig";


export class ListProvisionConfigsOutput extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  provisionConfigs?: ProvisionConfig[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      provisionConfigs: 'provisionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      provisionConfigs: { 'type': 'array', 'itemType': ProvisionConfig },
    };
  }

  validate() {
    if(Array.isArray(this.provisionConfigs)) {
      $dara.Model.validateArray(this.provisionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


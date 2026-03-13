// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProvisionConfig } from "./ProvisionConfig";


export class ListProvisionConfigsOutput extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * next_token
   */
  nextToken?: string;
  /**
   * @remarks
   * The provisioned configurations of the function.
   */
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


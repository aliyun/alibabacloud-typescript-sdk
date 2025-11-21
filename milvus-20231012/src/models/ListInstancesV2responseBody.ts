// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceDetail } from "./InstanceDetail";


export class ListInstancesV2ResponseBody extends $dara.Model {
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  instances?: InstanceDetail[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'instances',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': InstanceDetail },
      maxResults: 'number',
      nextToken: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


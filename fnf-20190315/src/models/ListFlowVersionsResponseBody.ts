// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowVersionsResponseBodyFlowVersions extends $dara.Model {
  /**
   * @example
   * 2025-10-24T14:11:26+08:00
   */
  createdTime?: string;
  /**
   * @example
   * version description
   */
  description?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowVersionsResponseBody extends $dara.Model {
  flowVersions?: ListFlowVersionsResponseBodyFlowVersions[];
  /**
   * @remarks
   * list token
   * 
   * @example
   * token
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 294D68C1-5108-5971-853A-1A9CC87B4816
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowVersions: 'FlowVersions',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowVersions: { 'type': 'array', 'itemType': ListFlowVersionsResponseBodyFlowVersions },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowVersions)) {
      $dara.Model.validateArray(this.flowVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


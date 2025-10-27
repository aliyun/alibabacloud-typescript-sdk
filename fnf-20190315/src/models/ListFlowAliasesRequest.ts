// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowAliasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example-flow-name
   */
  flowName?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * list token
   * 
   * @example
   * token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


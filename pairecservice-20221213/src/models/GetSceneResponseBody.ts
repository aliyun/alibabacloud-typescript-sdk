// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSceneResponseBodyFlows } from "./GetSceneResponseBodyFlows";


export class GetSceneResponseBody extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  flows?: GetSceneResponseBodyFlows[];
  /**
   * @example
   * scene1
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8987BF7-6028-5B17-80E0-251B7BD67BBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flows: 'Flows',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flows: { 'type': 'array', 'itemType': GetSceneResponseBodyFlows },
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Prompt } from "./Prompt";


export class ListPromptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of prompts.
   */
  prompts?: Prompt[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned under the current request conditions. This parameter is optional and may not be returned by default.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      prompts: 'Prompts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompts: { 'type': 'array', 'itemType': Prompt },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prompts)) {
      $dara.Model.validateArray(this.prompts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


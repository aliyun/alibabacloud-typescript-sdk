// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Agentic space. The globally unique identifier assigned by the system after the Agentic space (an independent workspace allocated to a single agent end user in AgenticFS) is created.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


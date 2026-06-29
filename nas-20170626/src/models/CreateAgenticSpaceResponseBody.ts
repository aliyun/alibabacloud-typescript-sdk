// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticSpaceResponseBody extends $dara.Model {
  /**
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
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


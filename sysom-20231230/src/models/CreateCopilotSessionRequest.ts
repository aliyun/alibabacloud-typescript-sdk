// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCopilotSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The session name. The name must be 1 to 255 characters in length. Default value: New Session. Empty strings or null values are not supported. If no name is specified, the server uses content generation to create a session name based on the first user message when it is received.
   * 
   * @example
   * Troubleshoot CPU load
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


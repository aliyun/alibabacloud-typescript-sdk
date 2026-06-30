// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business workspace.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the following detailed description.
   * 
   * @example
   * ""
   */
  jsonStr?: string;
  /**
   * @remarks
   * Specifies whether to enable Server-Sent Events (SSE) responses. Set to true to enable SSE responses. Default value: false.
   * 
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
      stream: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


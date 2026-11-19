// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniSearchQuery extends $dara.Model {
  /**
   * @remarks
   * The request parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * What is the weather in Hangzhou today?
   */
  query?: string;
  /**
   * @remarks
   * The session ID. This is a reserved field and is not currently supported.
   * 
   * @example
   * session_id_123
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to use CoT. This is a reserved field and is not currently supported.
   * 
   * @example
   * false
   */
  useCot?: boolean;
  /**
   * @remarks
   * The model version to use. Valid values: pro for the deep version, and lite for the fast version.
   * 
   * @example
   * pro
   */
  useModel?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sessionId: 'sessionId',
      useCot: 'useCot',
      useModel: 'useModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      sessionId: 'string',
      useCot: 'boolean',
      useModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniSearchQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 今天杭州天气
   */
  query?: string;
  sessionId?: string;
  useCot?: boolean;
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


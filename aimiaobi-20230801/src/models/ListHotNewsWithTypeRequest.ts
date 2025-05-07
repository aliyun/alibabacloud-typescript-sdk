// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotNewsWithTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypes?: string[];
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypes: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypes: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.newsTypes)) {
      $dara.Model.validateArray(this.newsTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


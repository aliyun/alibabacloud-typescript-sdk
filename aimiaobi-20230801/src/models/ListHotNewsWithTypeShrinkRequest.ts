// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotNewsWithTypeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the business space: [AgentKey](https://help.aliyun.com/document_detail/3027170.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The news category. Valid values:
   * - society: social current affairs.
   * - person: people news.
   * - government: government affairs.
   * 
   * @example
   * society
   */
  newsType?: string;
  /**
   * @remarks
   * The list of news categories for multi-selection. Valid values:
   * - society: social current affairs.
   * - person: people news.
   * - government: government affairs.
   */
  newsTypesShrink?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypesShrink: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypesShrink: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


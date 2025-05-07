// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomTextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 商品code
   */
  commodityCode?: string;
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 96
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      content: 'Content',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      content: 'string',
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace unique identifier: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Data ID
   * 
   * This parameter is required.
   * 
   * @example
   * 数据ID
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


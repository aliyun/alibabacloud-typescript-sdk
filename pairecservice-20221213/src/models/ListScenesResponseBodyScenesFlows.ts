// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenesResponseBodyScenesFlows extends $dara.Model {
  /**
   * @example
   * liuliang1
   */
  flowCode?: string;
  /**
   * @example
   * 流量1
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowCode: 'FlowCode',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCode: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


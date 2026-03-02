// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbbrevMonitorAlertRule extends $dara.Model {
  /**
   * @example
   * 2022-06-11T00:00:00.000Z
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 规则1
   */
  name?: string;
  /**
   * @example
   * 最近5分钟节点机CPU使用率平均大于等于90%
   */
  triggerContent?: string;
  /**
   * @example
   * 10
   */
  triggerRule?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      triggerContent: 'triggerContent',
      triggerRule: 'triggerRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'number',
      name: 'string',
      triggerContent: 'string',
      triggerRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


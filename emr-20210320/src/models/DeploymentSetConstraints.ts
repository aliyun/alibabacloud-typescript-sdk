// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReplacementStrategy } from "./ReplacementStrategy";


export class DeploymentSetConstraints extends $dara.Model {
  /**
   * @remarks
   * 默认值。
   * 
   * @example
   * CLUSTER
   */
  defaultValue?: string;
  /**
   * @example
   * 是否启用部署集限制策略
   */
  enableState?: string;
  /**
   * @remarks
   * 替换策略。
   */
  replacementStrategy?: ReplacementStrategy;
  /**
   * @remarks
   * 枚举值。
   * 
   * @example
   * ["CLUSTER","NODE_GROUP","NONE"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      enableState: 'EnableState',
      replacementStrategy: 'ReplacementStrategy',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      enableState: 'string',
      replacementStrategy: ReplacementStrategy,
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.replacementStrategy && typeof (this.replacementStrategy as any).validate === 'function') {
      (this.replacementStrategy as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


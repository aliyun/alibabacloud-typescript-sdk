// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceForDeleteResponseBodyCheckInstanceResultRestrictScenarios extends $dara.Model {
  /**
   * @remarks
   * 有帮助的控制台地址，可以管理对应的资源，从而解除实例删除限制。可能返回为空，不一定所有的资源ID都有管理地址返回。
   * 
   * @example
   * https://console-rpa.aliyun.com/
   */
  helpfulConsoleUrl?: string;
  /**
   * @remarks
   * 导致实例删除受限的资源ID。
   * 
   * @example
   * eas-r-nguosqgr75ndg784k8
   */
  resourceId?: string;
  /**
   * @remarks
   * 针对实例删除受限的原因文字描述。
   * 
   * @example
   * cloud_product_dependency
   */
  restrictReason?: string;
  static names(): { [key: string]: string } {
    return {
      helpfulConsoleUrl: 'HelpfulConsoleUrl',
      resourceId: 'ResourceId',
      restrictReason: 'RestrictReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpfulConsoleUrl: 'string',
      resourceId: 'string',
      restrictReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceForDeleteResponseBodyCheckInstanceResult extends $dara.Model {
  /**
   * @remarks
   * true表示实例可以被删除；false表示实例不可被删除，具体查看RestrictScenarios属性。
   * 
   * @example
   * True
   */
  deletable?: boolean;
  /**
   * @remarks
   * true表示实例可以被删除；false表示实例不可被删除，具体查看RestrictScenarios属性。
   */
  restrictScenarios?: CheckInstanceForDeleteResponseBodyCheckInstanceResultRestrictScenarios[];
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      restrictScenarios: 'RestrictScenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      restrictScenarios: { 'type': 'array', 'itemType': CheckInstanceForDeleteResponseBodyCheckInstanceResultRestrictScenarios },
    };
  }

  validate() {
    if(Array.isArray(this.restrictScenarios)) {
      $dara.Model.validateArray(this.restrictScenarios);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceForDeleteResponseBody extends $dara.Model {
  checkInstanceResult?: CheckInstanceForDeleteResponseBodyCheckInstanceResult;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkInstanceResult: 'CheckInstanceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInstanceResult: CheckInstanceForDeleteResponseBodyCheckInstanceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkInstanceResult && typeof (this.checkInstanceResult as any).validate === 'function') {
      (this.checkInstanceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


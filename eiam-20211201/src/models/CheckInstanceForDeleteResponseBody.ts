// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceForDeleteResponseBodyCheckInstanceResultRestrictScenarios extends $dara.Model {
  /**
   * @remarks
   * The URL of a helpful console page.
   * 
   * @example
   * https://console-rpa.aliyun.com/
   */
  helpfulConsoleUrl?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eas-r-nguosqgr75ndg784k8
   */
  resourceId?: string;
  /**
   * @remarks
   * The reason for the restriction.
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
   * Indicates whether the instance can be deleted.
   * 
   * @example
   * True
   */
  deletable?: boolean;
  /**
   * @remarks
   * The restriction information that prevents deletion.
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
  /**
   * @remarks
   * The returned result.
   */
  checkInstanceResult?: CheckInstanceForDeleteResponseBodyCheckInstanceResult;
  /**
   * @remarks
   * The request ID.
   * 
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


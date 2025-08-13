// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustVariableConfigListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Configuration key
   * 
   * @example
   * COUNT
   */
  configKey?: string;
  /**
   * @remarks
   * Configuration value
   * 
   * @example
   * 累计
   */
  configValue?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'configKey',
      configValue: 'configValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustVariableConfigListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeCustVariableConfigListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeCustVariableConfigListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


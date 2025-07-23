// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceSpec4ModifyResponseBodyDataOptionalValues extends $dara.Model {
  label?: string;
  max?: number;
  min?: number;
  step?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      max: 'Max',
      min: 'Min',
      step: 'Step',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      max: 'number',
      min: 'number',
      step: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponseBodyData extends $dara.Model {
  optionalValues?: QueryInstanceSpec4ModifyResponseBodyDataOptionalValues[];
  static names(): { [key: string]: string } {
    return {
      optionalValues: 'OptionalValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionalValues: { 'type': 'array', 'itemType': QueryInstanceSpec4ModifyResponseBodyDataOptionalValues },
    };
  }

  validate() {
    if(Array.isArray(this.optionalValues)) {
      $dara.Model.validateArray(this.optionalValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceSpec4ModifyResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryInstanceSpec4ModifyResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryInstanceSpec4ModifyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


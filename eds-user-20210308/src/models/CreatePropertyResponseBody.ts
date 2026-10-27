// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistedPropertyValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The property value is used by another property.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The property value ID.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  /**
   * @remarks
   * The property value ID.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be created.
   */
  failedPropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * The successfully created property values.
   */
  savePropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.failedPropertyValues)) {
      $dara.Model.validateArray(this.failedPropertyValues);
    }
    if(Array.isArray(this.savePropertyValues)) {
      $dara.Model.validateArray(this.savePropertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The property key.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property value creation result.
   */
  savePropertyValueModel?: CreatePropertyResponseBodyCreateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: CreatePropertyResponseBodyCreateResultSavePropertyValueModel,
    };
  }

  validate() {
    if(this.savePropertyValueModel && typeof (this.savePropertyValueModel as any).validate === 'function') {
      (this.savePropertyValueModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation result.
   */
  createResult?: CreatePropertyResponseBodyCreateResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: CreatePropertyResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


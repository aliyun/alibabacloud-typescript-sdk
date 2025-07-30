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
   * The ID of the property value.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The value of the property.
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
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
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
   * Details of the property values that were created.
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
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of creating the property value.
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
   * The result of creating the property.
   */
  createResult?: CreatePropertyResponseBodyCreateResult;
  /**
   * @remarks
   * The ID of the request.
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

